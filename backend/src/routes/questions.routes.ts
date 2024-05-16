import { Request, RequestHandler, Response, Router } from "express";
import { Questions } from "../db/models/index";
import { toNewQuestion } from "../utils/routes.util";

export const questionsRouter = Router();

questionsRouter.get("/", (async (_req: Request, res: Response) => {
  const questions = await Questions.findAll();
  res.status(200).json(questions);
}) as RequestHandler);

questionsRouter.post("/", (async (req: Request, res: Response) => {
  const newQuestion = toNewQuestion(req.body);
  const uploadedQuestion = await Questions.create(newQuestion);
  res.status(200).json(uploadedQuestion);
}) as RequestHandler);
