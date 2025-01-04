"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const constant_1 = require("./constant");
app_1.default.listen(constant_1.PORT, () => {
    console.log(`Server running on http://localhost:${constant_1.PORT}`);
});
