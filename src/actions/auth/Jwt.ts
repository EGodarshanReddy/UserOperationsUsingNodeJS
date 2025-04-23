import { User } from "../../../shared/interfaces/user/User.ts";
import { generateAccessToken, generateRefreshToken } from "./JwtRepo.ts";


export const generateAccessAndRefreshTokens = (user:any) => {
    const accessToken = generateAccessToken(user);
    console.log("Access token generated:", accessToken);
    const refreshToken = generateRefreshToken(user);
    console.log("Refresh token generated:", refreshToken);
    return {
        user,
        accessToken,
        refreshToken
    }
};
