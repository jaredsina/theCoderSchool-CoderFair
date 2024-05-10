import { Questions_Grades } from "../../types/models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Questions_Grades.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "question_grades",
  }
);

export { Questions_Grades };
