import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Roles } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async () => {
  await queryInterface.createTable<Roles>("roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};

export const down = async () => {
  await queryInterface.dropTable("roles");
};
