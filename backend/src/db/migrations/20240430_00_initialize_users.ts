import { DataTypes, QueryInterface } from "sequelize";
import { sequelize } from "../index";
import { User } from "../models/models.types";

// Allows interaction with the database
const queryInterface: QueryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable<User>("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("users");
};
