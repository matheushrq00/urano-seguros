export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const LeadSchema = z.object({
  tipo: z.enum(["cotacao", "renovacao"]),
  nome: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  telefone: z.string().min(8),
  seguro: z.string().optional(),
  vencimento: z.string().optional(),
  website: z.string().optional(), // honeypot anti-bot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Dados inválidos" },
        { status: 400 }
      );
    }

    // anti-bot simples
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const { tipo, nome, email, telefone, seguro, vencimento } = parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.LEADS_TO_EMAIL,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "Erro ao enviar lead" },
      { status: 500 }
    );
  }
}
