"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const companySchema_1 = require("../schemas/companySchema");
exports.Company = mongoose_1.default.model('Company', companySchema_1.companySchema);
