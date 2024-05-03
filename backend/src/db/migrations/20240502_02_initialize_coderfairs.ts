import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Coderfairs } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable<Coderfairs>("coderfairs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fairDate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("coderfairs");
};
