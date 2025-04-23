
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './actions/auth/JwtRepo.ts';


export function middleware(request: NextRequest) {


  console.log("Request URL:", request.url);
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized: Token missing or malformed' },{ status: 401 }as any);
  }

  const token = authHeader.split(' ')[1];

  console.log("Token:", token);
// const secret = process.env.ACCESS_TOKEN_SECRET;
const secret = process.env.NEXT_PUBLIC_SOME_ENV
if(!secret)
{
    throw new Error('Access token secret not found');
}
const payload = verifyToken(token,secret);
if(!payload)
{
    return NextResponse.json({ message: 'Unauthorized: Invalid token' },{ status: 401 }as any);
}
// Optional: Validate the token using jwt.verify() if needed
// if(request.nextUrl.pathname.startsWith('/api/admin')&&payload.role!=='admin')
  return NextResponse.next();
}


export const config = {
  matcher: [
    '/api/user/updateuser/:path*', 
  ]
}
 
