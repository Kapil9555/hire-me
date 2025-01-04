import { Document } from "mongoose";

export interface IUser extends Document{
firstName: string;
lastName: string;
role: string;
email: string;
DOB:string;
experienceType:string;
gender: string;
profileImage: string,
position: string;
viewedJobs: number;
appliedJobs: number;
sentResume: number;
savedJobs: number,
greetingTemplateCandidate: number;
greetingTemplateRecruiter: number;
chats : number;
interviews : number;
savedCandidates : number;
}