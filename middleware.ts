import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const hasClerkSecret = !!process.env.CLERK_SECRET_KEY;

export default hasClerkSecret
  ? clerkMiddleware()
  : function middleware() {
    return NextResponse.next();
  };

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/(.*)',
    '/(api|trpc)(.*)'
  ],
};
