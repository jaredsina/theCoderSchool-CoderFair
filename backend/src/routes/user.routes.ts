import { Request, RequestHandler, Response, Router } from "express";
import { User } from "../db/models";

export const userRouter = Router();

userRouter.get("/", (async (_req: Request, res: Response) => {
  const users = await User.findAll();
  if (!users) {
    res.status(404).send("No users found");
  }
  res.status(200).json(users);
}) as RequestHandler);
