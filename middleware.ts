import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protege apenas /admin e tudo dentro
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const ADMIN_USER = process.env.ADMIN_USER;
  const ADMIN_PASS = process.env.ADMIN_PASS;

  // Se não configurou as credenciais, bloqueia (produção segura)
  if (!ADMIN_USER || !ADMIN_PASS) {
    return new NextResponse("Admin credentials not configured.", {
      status: 500,
    });
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
    });
  }

  const base64 = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString("utf-8");
  const [user, pass] = decoded.split(":");

  if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
    return new NextResponse("Forbidden.", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
