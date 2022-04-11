import express, { Express, Request, Response } from "express";
import diariesRoute from "../modules/diaries/routes";
import corsOptions from "../libs/cors";
import cors from "cors";
const router = express.Router();

export = (app: Express) => {
  router.get("/status", (_req: Request, res: Response) => {
    res.end("OK");
  });
  const optionsSettings = corsOptions();
  app.use(cors(optionsSettings));
  app.use(diariesRoute());

  router.get("/*", (_req: Request, res: Response) => {
    res.status(404).send({ status: "fail", data: {} });
  });
  app.use(router);
  return app;
};
