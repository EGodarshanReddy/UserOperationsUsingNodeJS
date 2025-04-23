import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
import { User } from "../../../shared/interfaces/user/User.ts";
// import process from "node:process";

export function generateAccessToken(user:User) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  }


  export function generateRefreshToken(user:User) {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    
    return refreshToken;
  }


  // export function verifyToken(token: string, secret: string): User | null {
  //   try {
  //     const decoded = jwt.verify(token, secret) as User;
  //     return decoded;
  //   } catch (error) {
  //     console.error('Token verification failed:', error);
  //     throw new Error('Token verification failed');
  //   }
  // }

  // const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET!);
  


// === Verify Token (Edge-compatible) ===
// Use this only in `middleware.ts` (Edge Runtime)
export async function verifyToken(token: string, secretString: string): Promise<any> {
  try {
    const secret = new TextEncoder().encode(secretString);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid token");
  }
}
