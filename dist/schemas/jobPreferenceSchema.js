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
exports.jobPreferenceSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.jobPreferenceSchema = new mongoose_1.Schema({
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
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
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
    location: {
        type: {
            type: String,
            required: true
        },
        coordinates: []
    },
    fullAddress: {
        type: String,
        required: true,
    },
    expectedSalary: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    educationLevel: {
        type: String,
        enum: ["Doctorate", "Post-Graduation", "Graduation/Diploma", "Higher-Secondary", "School",],
    },
    skills: [String],
    company: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Company",
        required: false,
        default: null
    },
    creator: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });
