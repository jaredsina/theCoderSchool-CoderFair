import { RequestHandler, Response, Router } from "express";
import { Roles } from "../db/models/index";
import { RequestToken } from "../types/middleware.types";
import { toNewRole } from "../utils/routes.util";

export const rolesRouter = Router();

rolesRouter.post("/", (async (req: RequestToken, res: Response) => {
  const newRole = toNewRole(req.body);

  const createdRole = await Roles.create(newRole);

  res.status(200).json(createdRole);
}) as RequestHandler);
