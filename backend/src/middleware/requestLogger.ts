import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`Method: ${req.method}`);
  logger.info(`Url: ${req.url}`);
  logger.info(`Body: ${JSON.stringify(req.body)}`);
  logger.info("---------");
  next();
};
