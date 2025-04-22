

import { NextRequest, NextResponse } from "next/server";
import { loginWithOTP } from "../../../../../actions/user/Login.ts";
import { validatePhoneNumber } from "../../../../../utils/validations/UserValidations.ts";

export async function POST(req: NextRequest, { params }: { params: { phno: string } }): Promise<NextResponse> {

    try {
        const Phone = params.phno;
        const isPhonumberIsValid = await validatePhoneNumber(Phone);
        if (!isPhonumberIsValid) {
            return NextResponse.json({ error:"Invalid mobile number formate"  }, { status: 400 }as any);            
        }
        console.log('User ID:', Phone);
        const tokendata=await loginWithOTP(Phone);
        return NextResponse.json({ tokendata }, { status: 200 }as any);
    }
    catch (error) {
        console.error('Error fetching user by ID:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error Creating user' }, { status: 500 }as any );
    }
    // You can use this ID now for DB operations, etc.   
}
