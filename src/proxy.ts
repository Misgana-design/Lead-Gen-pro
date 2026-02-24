import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname; //returns '/admin/leads

  const isProtectedRoute = path.startsWith("/admin");

  const authToken = request.cookies.get("admin_token")?.value;

  if (isProtectedRoute && authToken !== process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // This is to make sure the middleware is running on the path that starts with 'admin'
};
