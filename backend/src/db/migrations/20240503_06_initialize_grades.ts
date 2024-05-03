import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Grades } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async () => {
  await queryInterface.createTable<Grades>("grades", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "projects", key: "id" },
    },
    judge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "judges", key: "id" },
    },
    overall_comments: {
      type: DataTypes.STRING,
    },
  });
};

export const down = async () => {
  await queryInterface.dropTable("grades");
};
