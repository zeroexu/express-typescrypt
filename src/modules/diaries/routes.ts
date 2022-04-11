import express from "express";
import { addDiaries } from "./controllers";

export default () => {
  const router = express.Router();
  router.get("/diaries", (_req, res) => {
    res.send("OK");
  });
  router.post("/diaries", addDiaries);
  return router;
};
