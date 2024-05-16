import { Coderfairs } from "../../types/models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Coderfairs.init(
  {
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
  },
  { sequelize, timestamps: true, underscored: true, modelName: "coderfairs" }
);

export { Coderfairs };
