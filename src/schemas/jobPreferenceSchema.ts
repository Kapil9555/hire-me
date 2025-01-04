import mongoose, { Schema } from "mongoose";



export const jobPreferenceSchema: Schema = new Schema(
  {
    jobType: {
      type: String,
      enum: ["Full Time", "Internship", "Contract", "Part Time"],
    },
    isRemote: {
      type: Boolean,
      required: true,
    },
    industry: {
      type: String,
      required: true,
      trim:true
    },
    category: {
      type: String,
      required: true,
      trim:true
    },
    position: {
      type: String,
      required: true,
      trim:true
    },
    city: {
      type: String,
      required: true,

    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    location:{
      type:{
        type:String,
        required:true
      },
      coordinates:[]
    } ,

    fullAddress: {
      type: String,
      required: true,
    },
    expectedSalary:{
      min:{
        type:Number,
        required:true
      },
      max:{
        type:Number,
        required:true
      },
      currency:{
        type:String,
        required:true
      }
    } ,

    title: {
      type: String,
      required: true,
      trim:true
    },
    description: {
      type: String,
      required: true,
    },
    educationLevel: {
      type: String,
      enum: ["Doctorate","Post-Graduation","Graduation/Diploma","Higher-Secondary","School",],
    },
    skills:[String],
    company:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Company",
      required:false,
      default:null
    },
    creator:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    }
  },
  { timestamps: true }
);
