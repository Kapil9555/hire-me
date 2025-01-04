import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import candidateRoutes from "./routes/candidate.routes";
import recruiterRoutes from "./routes/recruiter.routes";
import adminRoutes from "./routes/admin.routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/candidate", candidateRoutes);
app.use("/api/recruiter", recruiterRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

connectDB();

export default app;
