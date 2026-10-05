import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(
      new URL("http://localhost:3000/api/auth/signin", request.url),
    );
  }

  return NextResponse.next();
}
