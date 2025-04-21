import {z} from "zod";


export const UserSchema = z.object({    
    fullName: z.string().nonempty("Full name is required").min(3).max(50),    
    mobileNumber: z.string().nonempty("Mobile number is required"),    
    aadharNumber: z.string().nonempty("Aadhar number is required").length(12, "Aadhar number must be 12 digits"),        
    age: z.string().nonempty("Age is required").max(60,"Age must be less than 60").min(25,"Age must be greater than 25"),    
    companyName: z.string().nonempty("Company name is required").min(3,"Company name must be greater than 3").max(50,"Company name must be less than 50")     
});




export const UpdateUserSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters").max(50, "Full name must be at most 50 characters").optional(),
  mobileNumber: z.string().nonempty("Mobile number is required").optional(),
  aadharNumber: z.string().length(12, "Aadhar number must be 12 digits").optional(),
  age: z.string().min(2, "Age must be greater than 25").max(2, "Age must be less than 60").optional(),
  companyName: z.string().min(3, "Company name must be greater than 3").max(50, "Company name must be less than 50").optional(),
});