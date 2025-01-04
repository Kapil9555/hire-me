"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = exports.getUsers = void 0;
const http_status_codes_1 = require("http-status-codes");
const userModel_1 = require("../models/userModel");
const jobPreferenceModel_1 = require("../models/jobPreferenceModel");
const getUsers = async (req, res) => {
    try {
        res.status(http_status_codes_1.StatusCodes.OK).send([]);
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Failed to fetch users" });
    }
};
exports.getUsers = getUsers;
const createAccount = async (req, res) => {
    try {
        const { firstName, lastName, role, email, DOB, experienceType, gender, profileImage, position, jobType, isRemote, industry, category, jobPosition, city, state, country, lat, lng, fullAddress, expectedSalary, title, description, educationLevel, skills } = req.body;
        if ((role == 'Candidate' && (!firstName || !lastName || !role || !email || !DOB || !experienceType || !gender
            || !jobType || !industry || !category || !jobPosition || !city || !state || !country || !lat || !lng
            || !fullAddress || !expectedSalary || !title || !description || !educationLevel || !skills.length)) ||
            (role == 'Recruiter' && (!firstName || !lastName || !role || !email || !DOB || !experienceType || !gender || !position))) {
            console.log(req.body);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Incomplete Payload" });
        }
        else {
            console.log(req.body);
            const isExist = await userModel_1.User.findOne({ email: email });
            if (isExist) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Account already exist on this email" });
            }
            else {
                if (role == "Candidate") {
                    const toSave = new userModel_1.User({
                        ...req.body
                    });
                    const isSaved = await toSave.save();
                    if (isSaved) {
                        const toJobPrefSave = new jobPreferenceModel_1.JobPreference({
                            ...req.body,
                            creator: isSaved._id,
                            location: {
                                type: "Point",
                                coordinates: [
                                    parseFloat(lng),
                                    parseFloat(lat)
                                ]
                            }
                        });
                        const isJobPrefSaved = await toJobPrefSave.save();
                        if (isJobPrefSaved) {
                            res.status(http_status_codes_1.StatusCodes.CREATED).send({ message: "Account created successfully!" });
                        }
                        else {
                            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Failed to create job preference" });
                        }
                    }
                    else {
                        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Failed to create Account" });
                    }
                }
                if (role == "Recruiter") {
                    res.status(http_status_codes_1.StatusCodes.OK).send({ message: "Recruiter account is under development" });
                }
                else {
                    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Invalid User Type" });
                }
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Internal server error" });
    }
};
exports.createAccount = createAccount;
