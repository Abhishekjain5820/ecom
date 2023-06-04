import bcrypt from 'bcrypt'

//this helper function will hash the password for security
export const hashPassword=async(password)=>{
    try {
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds);
        return hashedPassword
        
    } catch (error) {
        console.log(error);
        
    }
}


//this helper function will compare between already available password in the db and the password entered by user at 
//login time
export const comparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);

}



