import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("questions", {
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

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("questions");
};
