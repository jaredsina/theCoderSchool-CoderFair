import { NextFunction, Response } from "express";
import { RequestToken } from "../types/middleware.types";
import * as jwt from "jsonwebtoken";
import { SECRET } from "../utils/config";

export const tokenValidator = (
  req: RequestToken,
  res: Response,
  next: NextFunction
) => {
  const { token } = req;

  if (!token) {
    return res.status(401).json({ error: "token missing" });
  }

  const decodeToken = jwt.verify(token, SECRET);

  req.decodedToken = decodeToken;

  return next();
};
