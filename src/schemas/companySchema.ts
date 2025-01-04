import mongoose, { Schema } from "mongoose";

export const companySchema: Schema = new Schema(
  {
    legalName: {
      type: String,
      required: true,
      trim:true
    },
    shortName: {
      type: String,
      required: true,
      trim:true
    },
    industry: {
      type: String,
      required: true,
      trim:true
    },
    companySize: {
      type: String,
      required: true,
      trim:true
    },
    locations:[
      {
        city:{
          type:String,
          required:true
        },
        state:{
          type:String,
          required:true
        },
        country:{
          type:String,
          required:true
        },
        fullAddress:{
          type:String,
          required:true
        },
        lat:{
          type:Number,
          required:true
        },
        long:{
          type:Number,
          required:true
        },
        isPrimary:{
          type:Boolean,
          required:true
        }
      }
    ],
    
    website: {
      type: String,
      required: true,
      trim:true
    },
    officialEmail: {
      type: String,
      required: true,
      trim:true
    },
    officialContact: {
      type: String,
      required: true,
      trim:true
    },
    logo: {
      type: String,
      required: true,
      trim:true
    },
    recruiters:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    creator: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
  },
  { timestamps: true }
);


// companySchema.index({
//   locations:"2dsphere",
// })