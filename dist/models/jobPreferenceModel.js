"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPreference = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jobPreferenceSchema_1 = require("../schemas/jobPreferenceSchema");
exports.JobPreference = mongoose_1.default.model('JobPreference', jobPreferenceSchema_1.jobPreferenceSchema);
