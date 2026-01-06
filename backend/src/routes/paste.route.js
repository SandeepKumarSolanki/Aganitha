import express from "express";
import { createPaste, fetchPaste } from "../controllers/paste.controller.js";

const router = express.Router();

router.post("/pastes", createPaste);
router.get("/pastes/:id", fetchPaste);

export default router;
