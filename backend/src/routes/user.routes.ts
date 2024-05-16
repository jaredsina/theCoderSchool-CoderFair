import { Request, RequestHandler, Response, Router } from "express";
import { Coderfairs, Project, User } from "../db/models/index";
import bcrypt from "bcrypt";
import { parseDecodedToken, toNewUser } from "../utils/routes.util";
import { tokenExtractor } from "../middleware/tokenExtractor";
import { tokenValidator } from "../middleware/tokenValidator";
import { RequestToken } from "../types/middleware.types";

export const userRouter = Router();

// Endpoint for getting a users information
userRouter.get("/info", tokenExtractor, tokenValidator, (async (
  req: RequestToken,
  res: Response
) => {
  const { id } = parseDecodedToken(req.decodedToken);

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).send("No user found");
  }

  return res.status(200).json(user);
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

