
import { NextRequest, NextResponse } from "next/server";

import { signup } from "../../../../actions/user/Signup.ts";

import { validate } from "../../../../../shared/interfaces/Validations/ValidateInputData.ts";
import { UserSchema } from "../../../../utils/validations/UserFieldValidation.ts";



export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        console.log("Sign up process initiated");        
        const user = await req.json();
        const parsedUser = UserSchema.safeParse(user);
        console.log("User data parsed from request:", parsedUser);        
        if(!parsedUser.success)
        {
            return validate(parsedUser);
        }        
        console.log("User data parsed from request:", user);        
        const newUser = await signup(user);
        console.log("New user created successfully:", newUser);
        
        console.log("Sign up process completed");
        return NextResponse.json(newUser, { status: 201 }as any);
    } catch (error) {
        console.error("Error encountered during sign up:", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error Creating user' }, { status: 500 }as any);
    }
}
