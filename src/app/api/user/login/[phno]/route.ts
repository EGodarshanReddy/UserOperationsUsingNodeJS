

import { NextRequest, NextResponse } from "next/server";
import { loginWithOTP } from "../../../../../actions/user/Login.ts";
import { validatePhoneNumber } from "../../../../../utils/validations/UserValidations.ts";

export async function POST(req: NextRequest, { params }: { params: { phno: string } }): Promise<NextResponse> {

    try {
        const Phone = params.phno;
        const isPhonumberIsValid = await validatePhoneNumber(Phone);

        


        console.log('User ID:', Phone);
        const tokendata=await loginWithOTP(Phone);
        return NextResponse.json({ tokendata }, { status: 200 });
    }
    catch (error) {
        console.error('Error fetching user by ID:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error Creating user' }, { status: 500 });
    }
  

    // You can use this ID now for DB operations, etc.
   
}
