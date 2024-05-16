import { RequestHandler, Response, Router } from "express";
import { Project } from "../db/models/index";
import bcrypt from "bcrypt";
import { tokenExtractor } from "../middleware/tokenExtractor";
import { tokenValidator } from "../middleware/tokenValidator";
import { RequestToken } from "../types/middleware.types";
import { parseDecodedToken, toNewProject } from "../utils/routes.util";
export const projectRouter = Router();

projectRouter.get("/", (async (_req, res: Response) => {
  const projects = await Project.findAll();
  return res.status(200).json(projects);
}) as RequestHandler);

projectRouter.post("/", tokenExtractor, tokenValidator, (async (
  req: RequestToken,
  res: Response
) => {
  const newProject = toNewProject(req.body);
  const saltRounds: number = 10;
  const passwordHash = await bcrypt.hash(
    newProject.project_password,
    saltRounds
  );
  const { id } = parseDecodedToken(req.decodedToken);
  const uploadedProject = await Project.create({
    ...newProject,
    project_password: passwordHash,
    student_id: id,
  });

  res.status(200).json(uploadedProject);
}) as RequestHandler);
