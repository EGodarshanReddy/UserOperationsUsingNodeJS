import { NextResponse } from "next/server";


export function validate(validationData:any) {
    try {
        
        const error:Record<string,string>={};
        for(const issue of validationData.error.issues)
        {
            const field=issue.path[0];
            error[field]=issue.message; 
        }
        return NextResponse.json({ error }, { status: 400 });
    } catch (error) {
        throw error;
    }
}