require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");
const express = require("express");
const dbConfig = require("./config/dbConfig");

const app = express();
app.use(express.json());

console.log(
  dbConfig.DBNAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  dbConfig.HOST,
  dbConfig.PORT
);

// connect sequelize to AWS RDS database
const sequelize = new Sequelize(
  dbConfig.DBNAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 1,
      min: 0,
      acquire: 3000,
    },
  }
);

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
