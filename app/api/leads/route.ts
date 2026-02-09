import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const LeadSchema = z.object({
  tipo: z.enum(["cotacao", "renovacao"]),
  nome: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  telefone: z.string().min(8),
  seguro: z.string().optional(),
  vencimento: z.string().optional(),
  website: z.string().optional(), // honeypot
});

// Rate limit simples em memória (bom para Vercel/Node, não é perfeito em multi-instância,
// mas já reduz spam e ataques básicos sem complicar)
const RATE_WINDOW_MS = 60_000; // 1 min
const RATE_MAX = 10; // 10 requests/min por IP
const bucket = new Map<string, { count: number; resetAt: number }>();

function getIP(req: Request) {
  // Em Vercel/Proxy normalmente vem em x-forwarded-for
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const item = bucket.get(ip);

  if (!item || now > item.resetAt) {
    bucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true as const };
  }

  if (item.count >= RATE_MAX) {
    return { ok: false as const, retryInMs: item.resetAt - now };
  }

  item.count += 1;
  return { ok: true as const };
}

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    // Rate limit
    const ip = getIP(req);
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, message: "Muitas tentativas. Tente novamente em instantes." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Dados inválidos" },
        { status: 400 }
      );
    }

    // Anti-bot (honeypot): se preencher, finge sucesso e não faz nada
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Env obrigatórias
    const SMTP_HOST = mustEnv("SMTP_HOST");
    const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
    const SMTP_USER = mustEnv("SMTP_USER");
    const SMTP_PASS = mustEnv("SMTP_PASS");
    const LEADS_TO_EMAIL = mustEnv("LEADS_TO_EMAIL");

    // Supabase (preferência: SERVICE ROLE no server)
    const SUPABASE_URL = mustEnv("SUPABASE_URL"); // server-only
    const SUPABASE_SERVICE_ROLE_KEY = mustEnv("SUPABASE_SERVICE_ROLE_KEY"); // server-only

    const { tipo, nome, email, telefone, seguro, vencimento } = parsed.data;

    const subject =
      tipo === "cotacao"
        ? "🧾 Novo pedido de Cotação (Site)"
        : "🔁 Pedido de Renovação (Site)";

    const text = `
Tipo: ${tipo}
Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email || "-"}
Seguro: ${seguro || "-"}
Vencimento: ${vencimento || "-"}

Origem: Site Urano Seguros
`.trim();

    // 1) Salvar no Supabase (server role)
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { error } = await supabase.from("leads").insert([
      {
        tipo,
        nome,
        email: email || null,
        telefone,
        seguro: seguro || null,
        vencimento: vencimento || null,
        origem: "site",
        // opcional: guardar IP pra auditoria/spam (se quiser, crie coluna ip)
        // ip,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar no Supabase:", error);
      // não derruba o lead por causa do DB — ainda tenta enviar o e-mail
    }

    // 2) Enviar email
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465 geralmente é secure:true
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || SMTP_USER,
      to: LEADS_TO_EMAIL,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, message: "Erro ao enviar lead" },
      { status: 500 }
    );
  }
}
