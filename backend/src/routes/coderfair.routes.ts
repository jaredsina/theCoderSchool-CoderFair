import { Request, RequestHandler, Response, Router } from "express";
import { Coderfairs } from "../db/models/index";

export const coderfairRouter = Router();

coderfairRouter.get("/", (async (_req: Request, res: Response) => {
  const coderfairs = await Coderfairs.findAll();
  res.status(200).json(coderfairs);
}) as RequestHandler);
