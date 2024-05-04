import { NextRequest, NextResponse } from "next/server";
import { type Session } from "next-auth";

import { auth } from "@/lib/auth";

interface NextAuthRequest extends NextRequest {
  auth: Session | null;
}

export default auth((req: NextAuthRequest) => {
  const isAuth = !!req.auth?.user;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/overview", req.url));
    }
    return;
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }
    return NextResponse.redirect(
      new URL(`/login?return_to=${encodeURIComponent(from)}`, req.url)
    );
  }
});

export const config = {
  matcher: ["/overview"],
};
