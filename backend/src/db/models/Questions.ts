import { Questions } from "./models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, underscored: true, modelName: "questions" }
);

export { Questions };
