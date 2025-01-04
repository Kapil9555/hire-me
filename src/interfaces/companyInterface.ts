import { Document } from "mongoose";

export interface ICompany extends Document{
legalName: string; 
shortName: string; 
industry : string; 
companySize : string; 
// locations :
website : string; 
officialEmail : string; 
officialContact : string; 
logo : string;
// recruiters: 
// creator: ; 
}