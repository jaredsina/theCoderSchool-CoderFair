import dotenv from "dotenv";
import { connectToDatabase } from "./utils/db";
dotenv.config();

// no try/catch blocks for async/await
import "express-async-errors";

import express from "express";

const app = express();
app.use(express.json());

const start = async () => {
  // We want to make sure that the database connection is established successfully before the actual startup.
  await connectToDatabase();
};

start();
