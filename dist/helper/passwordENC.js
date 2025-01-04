"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = async (kw) => {
    const newPass = await bcrypt_1.default.hash(kw, 12);
    return newPass;
};
exports.hashPassword = hashPassword;
const isValidPassword = async (kw, encKw) => {
    const isValid = await bcrypt_1.default.compare(kw, encKw);
    return isValid;
};
exports.isValidPassword = isValidPassword;
