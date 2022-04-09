import express from "express";
import { addDiaries } from "./controllers";
const router = express.Router();

router.get("/");
router.post("/diaries", addDiaries);
