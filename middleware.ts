import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip redirect during local development to keep `npm run dev` working
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  // In production: enforce HTTPS when behind a proxy (e.g., Vercel)
  if (request.headers.get('x-forwarded-proto') === 'http') {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
