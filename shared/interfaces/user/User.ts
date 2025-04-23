import { UserProfile } from "./UserProfile.ts";

export interface User {
  id: string;
  fullName: string;
  fatherName?: string;
  age?: string;
  role: string;
  mobileNumber: string;
  alternateMobileNumber?: string;
  aadharNumber: string;
  companyName?: string;
  gstNumber?: string;
  createdTimeStamp: Date;
  updatedTimeStamp: Date;
  UserProfile?: UserProfile; // Optional, as it may not exist initially
}
