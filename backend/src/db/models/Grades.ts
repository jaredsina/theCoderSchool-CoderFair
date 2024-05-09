import { Grades } from "./models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Grades.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    overall_comments: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, timestamps: false, underscored: true, modelName: "grades" }
);

export { Grades };
