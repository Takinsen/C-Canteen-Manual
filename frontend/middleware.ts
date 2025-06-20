import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'th',
  localePrefix: 'always',  
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};