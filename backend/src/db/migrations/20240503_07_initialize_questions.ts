import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Questions } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async () => {
  await queryInterface.createTable<Questions>("questions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export const down = async () => {
  await queryInterface.dropTable("questions");
};
