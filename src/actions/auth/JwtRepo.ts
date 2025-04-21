import jwt from "jsonwebtoken";

import { User } from "../../../shared/interfaces/user/User.ts";

export function generateAccessToken(user:User) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  }


  export function generateRefreshToken(user:User) {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    
    return refreshToken;
  }
