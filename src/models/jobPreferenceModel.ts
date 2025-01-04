import mongoose from "mongoose";
import { IJobPreference } from "../interfaces/jobPreferenceInterface";
import { jobPreferenceSchema } from "../schemas/jobPreferenceSchema";


export const JobPreference = mongoose.model<IJobPreference>('JobPreference' , jobPreferenceSchema);