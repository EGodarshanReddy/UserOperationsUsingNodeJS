import { User } from "../../../shared/interfaces/user/User.ts";
import { updateUserdata } from "./User.ts";



export async function updateUser(userId: string, data: Partial<User>): Promise<User> {
       const updatedUser = await updateUserdata(userId, data);
       if (!updatedUser) {
         throw new Error('User not found');
       }
       return updatedUser;
  }