import dotenv from "dotenv";
dotenv.config();

const { Sequelize } = require("sequelize");
const express = require("express");
const dbConfig = require("./config/dbConfig");

const app = express();
app.use(express.json());

// connect sequelize to AWS RDS database
console.log(dbConfig.DB_URL);
const sequelize = new Sequelize(dbConfig.DB_URL);

const main = async () => {
  try {
    console.log("Trying to connect...");
    await sequelize.authenticate();
    console.log("Connection has been established succesfuly");
    sequelize.close();
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};

main();
