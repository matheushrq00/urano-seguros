export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Area"',
    },
  });
}

function checkBasicAuth(req: Request) {
  const ADMIN_USER = process.env.ADMIN_USER;
  const ADMIN_PASS = process.env.ADMIN_PASS;

  if (!ADMIN_USER || !ADMIN_PASS) {
    throw new Error("Admin credentials not configured");
  }

  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;

  const base64 = auth.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString("utf-8");
  const [user, pass] = decoded.split(":");

  return user === ADMIN_USER && pass === ADMIN_PASS;
}

export async function POST(req: Request) {
  try {
    // 🔐 Proteção REAL (não depende só do middleware)
    if (!checkBasicAuth(req)) {
      return unauthorized();
    }

    const body = await req.json();
    const { id, status } = body as {
      id?: string;
      status?: "novo" | "atendido";
    };

    if (!id || !status) {
      return NextResponse.json(
        { ok: false, message: "Dados inválidos" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Erro ao atualizar status:", error);
      return NextResponse.json(
        { ok: false, message: "Erro ao atualizar" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Erro interno:", err);
    return NextResponse.json(
      { ok: false, message: "Erro interno" },
      { status: 500 }
    );
  }
}
