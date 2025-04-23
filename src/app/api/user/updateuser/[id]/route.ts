import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../../../shared/interfaces/user/User.ts";

import { updateUser } from "../../../../../actions/user/UpdateUser.ts";
import { validate } from "../../../../../../shared/interfaces/Validations/ValidateInputData.ts";
import { UpdateUserSchema } from "../../../../../utils/validations/UserFieldValidation.ts";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
        try{
            const data:Partial<User>=await request.json();            
            const id=params.id;
            const parsedData=UpdateUserSchema.safeParse(data);
            if(!parsedData.success)
            {
               return validate(parsedData);
            }            
            const updatedUser=await updateUser(id,data);
            return NextResponse.json(updatedUser);
        }
        catch(error)
        {
            return NextResponse.json({ error: error instanceof Error ? error.message : 'Error Creating user' }, { status: 500 } as any);
        }
    }