import express from "express";
import {
  sseController,
  sendMessage,
  getChatMessages,
} from "../controllers/message.controller.js";
import upload from "../configs/multer.config.js";
import protect from "../middlewares/auth.middleware.js";

const messageRouter = express.Router();

messageRouter.get("/:userId", sseController);
messageRouter.post("/send", upload.single("image"), protect, sendMessage);
messageRouter.post("/get", protect, getChatMessages);

export default messageRouter;
