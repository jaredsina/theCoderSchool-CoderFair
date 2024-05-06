import { DataTypes, QueryInterface } from "sequelize";
import { sequelize } from "../index";

// Allows interaction with the database
const queryInterface: QueryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password_hash: { type: DataTypes.STRING, allowNull: false },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("users");
};
