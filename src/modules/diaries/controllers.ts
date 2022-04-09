import { Request, Response } from "express";

export const addDiaries = (_req: Request, res: Response) => {
  res.send("agregar diario");
};
