import { RequestHandler, Response, Router } from "express";
import { Project } from "../db/models/index";

export const projectRouter = Router();

projectRouter.get("/", (async (_req, res: Response) => {
  const projects = await Project.findAll();
  return res.status(200).json(projects);
}) as RequestHandler);
