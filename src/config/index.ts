import path from "path";
import morgan from "morgan";
import express, { Request, Response, NextFunction, Express } from "express";
import HTTPError from "http-errors";
import { SETTINGS, APP_KEYS, ERROR_MESSAGES } from "../libs/constants/keys";
//import multer from "multer";
import routes from "../routes";

export default (app: Express) => {
  // Settings
  app.set(APP_KEYS.PORT, SETTINGS.PORT);
  app.set(APP_KEYS.ENV, SETTINGS.NODE_ENV);
  app.set(APP_KEYS.APP_NAME, SETTINGS.APP_NAME);
  // Static files
  app.use("/public", express.static(path.join(__dirname, "../public")));
  // middlewares
  //>>app.use(multer({ dest: path.join(__dirname, "./public/upload/temp") }).single("image"));
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Routes
  app = routes(app);

  // catch 404 and forward to error handler
  app.use((_req: Request, _res: Response, next: NextFunction) => {
    const err = HTTPError(404, ERROR_MESSAGES.NOT_FOUND);
    next(err);
  });

  // error handler
  app.use((err: Error, _req: Request, res: Response) => {
    res.sendStatus(500);
    return res.send(err.message);
  });

  return app;
};
