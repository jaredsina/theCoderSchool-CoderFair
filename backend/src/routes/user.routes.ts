import { Request, RequestHandler, Response, Router } from "express";
import { User } from "../db/models/index";
import { RequestToken } from "../types/middleware.types";
import bcrypt from "bcrypt";
import { toNewUser } from "../utils/user.utils";

export const userRouter = Router();

// Endpoint for getting a users information
userRouter.get("/:id", (async (req: RequestToken, res: Response) => {
  console.log(req.token, req.decodedToken);

  const user = await User.findByPk(req.params.id);

  if (!user) {
    res.status(404).send("No user found");
  }

  res.status(200).json(user);
}) as RequestHandler);

userRouter.post("/", (async (req: Request, res: Response) => {
  const saltRounds: number = 10;
  const newUser = toNewUser(req.body);
  const passwordHash = await bcrypt.hash(newUser.passwordHash, saltRounds);
  const savedUser = await User.create({
    ...newUser,
    passwordHash: passwordHash,
  });
  res.status(200).json(savedUser);
}) as RequestHandler);

