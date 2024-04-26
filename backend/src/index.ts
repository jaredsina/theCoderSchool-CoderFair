import dotenv from "dotenv";
dotenv.config();

// no try/catch blocks for async/await
import "express-async-errors";

import { Sequelize } from "sequelize";
import express from "express";
import { dbConfig } from "../config/dbConfig";

const app = express();
app.use(express.json());

// connect sequelize to docker database
console.log(dbConfig.DATABASE_URL);
const sequelize = new Sequelize(dbConfig.DATABASE_URL);

const main = async () => {
  try {
    console.log("Trying to connect...");
    await sequelize.authenticate();
    console.log("Connection has been established succesfuly");
    await sequelize.close();
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};

// We want to make sure that the database connection is established successfully before the actual startup.
main().catch((error) => console.error("error" + error));
