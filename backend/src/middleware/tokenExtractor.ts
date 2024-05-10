import { NextFunction, Response } from "express";
import { RequestToken } from "./middleware.types";

// This middleware extracts the token from the request header and adds it to the request object. Allowing us to validate the token in the tokenValidator middleware
export const tokenExtractor = (
  req: RequestToken,
  _res: Response,
  next: NextFunction
) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.token = authorization.substring(7);
  }
  next();
};
