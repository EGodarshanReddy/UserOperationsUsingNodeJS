import { isValidPhoneNumber} from 'libphonenumber-js';

export const validatePhoneNumber = (mobileNumber: string) => {

    if(!mobileNumber)
    {
        throw new Error("Mobile number is required");
    }
    if (!isValidPhoneNumber(mobileNumber)) {
        throw new Error("Invalid mobile number formate");        
    } 
    return null;
}