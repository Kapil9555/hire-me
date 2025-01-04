import express from "express";
import { createAccount, getUsers } from "../controllers/candidate.controller";

const router = express.Router();

router.get("/users", getUsers);

router.post("/user", createAccount);


export default router;
