import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoDb from "./configs/mongodb.config.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/user.route.js";

const app = express();

// Connect to Mongodb database
connectMongoDb();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
