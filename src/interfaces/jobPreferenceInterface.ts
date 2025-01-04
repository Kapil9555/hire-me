import { Document } from "mongoose";

export interface IJobPreference extends Document{
jobType : string; 
isRemote : Boolean; 
industry : string; 
category : string; 
jobPosition: string; 
city: string; 
state: string; 
country: string; 
fullAddress: string; 
title : string; 
description : string;
educationLevel : string;
}