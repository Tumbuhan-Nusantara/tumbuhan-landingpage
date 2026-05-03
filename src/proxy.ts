
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const middleware = createMiddleware({
  locales: ['id', 'en'],
  defaultLocale: 'id'
});

export default function tes (req: NextRequest) {
  console.log("🔥 MIDDLEWARE JALAN");
  return middleware(req);
}

export const config = {
  matcher: ['/', '/(id|en)/:path*']
};
