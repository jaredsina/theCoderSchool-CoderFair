import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config";

const sequelize = new Sequelize(DATABASE_URL);

export const connectToDatabase = async () => {
  try {
    console.log("Trying to connect to database...");
    await sequelize.authenticate();
    console.log("Connection established");
    await sequelize.close();
  } catch (error) {
    console.log("Error connecting to database" + error);
  }
};
