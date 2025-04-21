import { User } from "../../../shared/interfaces/user/User";
import { generateAccessToken, generateRefreshToken } from "./JwtRepo";


export const generateAccessAndRefreshTokens = (user:User) => {
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
