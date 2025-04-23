import { generateAccessAndRefreshTokens } from "../auth/Jwt.ts";
import {getUserPhno } from "./User.ts";

export  async function loginWithOTP(phno:string) 
{
    if(!phno)
    {
        return new Error("Phone number is required");
    }

    const user = await getUserPhno(phno);
    
    if(!user)
    {
        throw new Error("User not found wit the given phone number: "+phno);
    }
    const sessiondata= generateAccessAndRefreshTokens(user);

    if(!sessiondata)
    {
        return new Error("Session data not generated");
    }
    return sessiondata;
}