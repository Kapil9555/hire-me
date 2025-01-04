import bcrypt from 'bcrypt';

export const hashPassword = async (kw: string) =>{
    const newPass = await bcrypt.hash(kw, 12);
    return newPass;
}; 


export const isValidPassword = async (kw : string, encKw: string)=>{
    const isValid = await bcrypt.compare(kw, encKw);
    return isValid;
};