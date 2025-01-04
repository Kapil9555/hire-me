import mongoose, { Schema } from "mongoose";

export const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim:true
    },
    lastName: {
      type: String,
      required: true,
      trim:true
    },
    role: {
      type: String,
      enum: ["Candidate", "Recruiter"],
    },
    email: {
      type: String,
      required: true,
      trim:true
    },
    DOB: {
      type: String,
      required: true,
      trim:true
    },
    experienceType: {
      type: String,
      enum: ["Fresher", "Experience", " "],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    profileImage: {
      type: String,
      required: false,
      default : ''
  
    },
    position: {
      type: String,
      required: false,
    },
    viewedJobs: {
      type: Number,
      required: false,
      default: 0,
    },
    appliedJobs: {
      type: Number,
      required: false,
      default: 0,
    },
    sentResume: {
      type: Number,
      required: false,
      default: 0,
    },
    savedJobs: {
      type: Number,
      required: false,
      default: 0,
    },
    greetingTemplateCandidate: {
      type: Number,
      required: false,
      default: 0,
    },
    greetingTemplateRecruiter: {
      type: Number,
      required: false,
      default: 0,
    },
    chats: {
      type: Number,
      required: false,
      default: 0,
    },
    interviews: {
      type: Number,
      required: false,
      default: 0,
    },
    savedCandidates: {
      type: Number,
      required: false,
      default: 0,
    },
      currentCompany: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required :false,
        default:null,
      }
  },
  { timestamps: true }
);
