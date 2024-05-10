import { NextFunction, Request, Response } from "express";

// If this middleware is reached than the user sent a request to an unknown endpoint
export const unknownEndpoint = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(404).send({ error: "unknown endpoint" });
};
