import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import { User } from "../models/userModel";
import { JobPreference } from "../models/jobPreferenceModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    res.status(StatusCodes.OK).send([]);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Failed to fetch users" });
  }
};



export const createAccount = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, role, email, DOB, experienceType, gender, profileImage, position,
      jobType, isRemote, industry, category, jobPosition, city, state, country, lat, lng,
      fullAddress, expectedSalary, title, description, educationLevel, skills
    } = req.body;

    if ((role == 'Candidate' && (!firstName || !lastName || !role || !email || !DOB || !experienceType || !gender
      || !jobType || !industry || !category || !jobPosition || !city || !state || !country || !lat || !lng
      || !fullAddress || !expectedSalary || !title || !description || !educationLevel || !skills.length)) ||
      (role == 'Recruiter' && (!firstName || !lastName || !role || !email || !DOB || !experienceType || !gender || !position))) {
      console.log(req.body);
      res.status(StatusCodes.BAD_REQUEST).send({ message: "Incomplete Payload" });
    } else {
      console.log(req.body);
      const isExist = await User.findOne({ email: email });
      if (isExist) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: "Account already exist on this email" });
      } else {
        if (role == "Candidate") {
          const toSave = new User({
            ...req.body
          });
          const isSaved = await toSave.save();
          if (isSaved) {
            const toJobPrefSave = new JobPreference({
              ...req.body,
              creator : isSaved._id,
              location : {
                type : "Point",
                coordinates : [
                  parseFloat(lng),
                  parseFloat(lat)
                ]
              }
            });

            const isJobPrefSaved = await toJobPrefSave.save();
            
            if(isJobPrefSaved){
              res.status(StatusCodes.CREATED).send({message : "Account created successfully!"});
            }else{
              res.status(StatusCodes.BAD_REQUEST).send({message : "Failed to create job preference"});
            }
          } else {
            res.status(StatusCodes.BAD_REQUEST).send({ message: "Failed to create Account" });
          }
        }
        if (role == "Recruiter") {
          res.status(StatusCodes.OK).send({ message: "Recruiter account is under development" });
        } else {
          res.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid User Type" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal server error" });
  }
};


