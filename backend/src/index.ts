import dotenv from "dotenv";
import { connectToDatabase } from "./db/index";
import { SERVER_PORT } from "./utils/config";
// no try/catch blocks for async/await
import "express-async-errors";
import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import { requestLogger } from "./middleware/requestLogger";
import { unknownEndpoint } from "./middleware/unknownEndpoint";
import { userRouter } from "./routes/user.routes";
import { loginRouter } from "./routes/login.routes";

dotenv.config();

const app = express();
app.use(express.json());

// Easily view request info on the server logs
app.use(requestLogger);

// Assert as RequestHandler because post expects a void return not a Promise<void>
app.get("/", (_req, res) => {
  res.status(200).send("<h1>Hello World! I am Alive!</h1>");
});

app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);

// Handle any async errors or unknownEndpoints
app.use(unknownEndpoint);
app.use(errorHandler);

const start = async () => {
  // We want to make sure that the database connection is established successfully before the actual startup.
  await connectToDatabase();
  app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`);
  });
};

start().catch((error) => console.error(error));
