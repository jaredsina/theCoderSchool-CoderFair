import { ErrorRequestHandler } from "express";
import logger from "../utils/logger";

// Handle errors in one place if we want to report data related errors to an external error-tracking system
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof Error) {
    logger.error(err.message);

    if (err.name === "ValidationError") {
      return res.status(400).json({ error: "malformatted id" });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ error: err.message });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }

  // Catch any unexpected errors that aren't instances of Error
  return res.status(500).json({ error: "Internal Server Error" });
};
