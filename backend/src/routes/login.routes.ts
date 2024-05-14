import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  Router,
} from "express";
import { toNewLogin } from "../utils/login.utils";
import { User } from "../db/models/index";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET } from "../utils/config";

export const loginRouter = Router();

loginRouter.post("/", (async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Validate request body
  const newLogin = toNewLogin(req.body);

  const user = await User.findOne({ where: { username: newLogin.username } });

  const passwordValid =
    user === null ? false : await compare(newLogin.password, user.passwordHash);

  if (!(user && passwordValid)) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };

  const token = sign(userForToken, SECRET);

  return res.status(200).json({
    token,
    username: user.username,
    name: user.firstName + " " + user.lastName,
  });
}) as RequestHandler);
