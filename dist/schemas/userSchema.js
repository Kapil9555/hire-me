"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["Candidate", "Recruiter"],
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    DOB: {
        type: String,
        required: true,
        trim: true
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
        default: ''
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Company",
        required: false,
        default: null,
    }
}, { timestamps: true });
