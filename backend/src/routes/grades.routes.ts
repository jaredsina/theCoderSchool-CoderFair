import { Request, RequestHandler, Response, Router } from "express";
import { Grades } from "../db/models/index";
import { toNewGrade } from "../utils/routes.util";
export const gradesRouter = Router();

gradesRouter.get("/", (async (_req: Request, res: Response) => {
  const grades = await Grades.findAll();
  res.status(200).json(grades);
}) as RequestHandler);

gradesRouter.post("/", (async (req: Request, res: Response) => {
  const newGrade = toNewGrade(req.body);
  const uploadedGrade = await Grades.create(newGrade);
  res.status(200).json(uploadedGrade);
}) as RequestHandler);
