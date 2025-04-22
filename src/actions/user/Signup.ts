import { User } from "../../../shared/interfaces/user/User.ts";
import { createAccount } from "./User.ts";



export async function signup(user:User) 
{
    console.log("Starting sign up process");
    console.log("User received for sign up:", user);
    const createdUser =  await createAccount(user);

    console.log("User creation result:", createdUser);

    if(!createdUser){
        console.error("Applicant creation failed");
        throw new Error(`Applicant creation failed`);
    }

    return createdUser;
}
