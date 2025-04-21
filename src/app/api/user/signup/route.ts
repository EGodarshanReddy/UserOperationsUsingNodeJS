
import { NextRequest, NextResponse } from "next/server";

import { signup } from "../../../../actions/user/Signup.ts";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        console.log("Sign up process initiated");
        
        const user = await req.json();
        console.log("User data parsed from request:", user);
        
        const newUser = await signup(user);
        console.log("New user created successfully:", newUser);
        
        console.log("Sign up process completed");
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error encountered during sign up:", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error Creating user' }, { status: 500 });
    }
}
