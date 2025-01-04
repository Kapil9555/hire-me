import mongoose from "mongoose";
import { IUser } from "../interfaces/userInterface";
import { userSchema } from "../schemas/userSchema";

export const User = mongoose.model<IUser>('User',userSchema);