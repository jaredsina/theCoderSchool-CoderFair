import { Request, RequestHandler, Response, Router } from "express";
import { Coderfairs } from "../db/models/index";
import { toNewCoderfair } from "../utils/routes.util";

export const coderfairRouter = Router();

coderfairRouter.get("/", (async (_req: Request, res: Response) => {
  const coderfairs = await Coderfairs.findAll();
  res.status(200).json(coderfairs);
}) as RequestHandler);

coderfairRouter.post("/", (async (req: Request, res: Response) => {
  const newCoderfair = toNewCoderfair(req.body);

  const uploadedCoderfair = await Coderfairs.create(newCoderfair);

  res.status(200).json(uploadedCoderfair);
}) as RequestHandler);
