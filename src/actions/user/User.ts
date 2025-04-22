


import { PrismaClient } from '@prisma/client';


import { User } from '../../../shared/interfaces/user/User.ts';



const prisma = new PrismaClient();

export default async function getApplicantById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return null;
  }
}


export const createAccount=async (user: User)=> {
  try {
    const createdUser = await prisma.user.create({
      data: user,
    });
    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }

}

export const getUserById=async (userId: string)=> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return null;
  }
}

export const getUserPhno = async (phno: string): Promise<any> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        mobileNumber: phno,
      },
    });
    console.log('Fetched user by mobile number:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user by mobile number:', error);
    throw new Error('Error fetching user by mobile number');
  }
};

export const updateUserdata = async (userId: string, data: Partial<User>):  Promise<any> => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
    console.log('Updated user:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Error updating user');
  }
};