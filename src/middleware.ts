
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './actions/auth/JwtRepo.ts';
import process from "node:process";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized: Token missing or malformed' },{ status: 401 }as any);
  }

  const token = authHeader.split(' ')[1];
const secret = process.env.ACCESS_TOKEN_SECRET;
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
    '/api/updateuser/:path*', 
  ]
}
 
