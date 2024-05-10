import { Project } from "../../types/models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "project",
    underscored: true,
  }
);

export { Project };
