import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const AUTH_COOKIE_NAME = 'auth';
const PASSWORD = process.env.SITE_PASSWORD || 'nova2025'; // Set your password here or via env var

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files, API routes, auth page, and favicon
  if (
    pathname.startsWith('/auth') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const isAuthed = request.cookies.get(AUTH_COOKIE_NAME)?.value === 'true';

  if (!isAuthed) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/auth';
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
} 