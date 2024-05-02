import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Project } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable<Project>("projects", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    presentation_video_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code_access_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coding_language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    overall_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("projects");
};
