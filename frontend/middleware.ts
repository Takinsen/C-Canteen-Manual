import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'th',
  localePrefix: 'always',
});

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Force Thai as the default only when path is `/`
  if (url.pathname === '/') {
    // Replace with /th explicitly
    return NextResponse.redirect(new URL('/th', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
