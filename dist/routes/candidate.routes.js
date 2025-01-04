"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const candidate_controller_1 = require("../controllers/candidate.controller");
const router = express_1.default.Router();
router.get("/users", candidate_controller_1.getUsers);
router.post("/user", candidate_controller_1.createAccount);
exports.default = router;
