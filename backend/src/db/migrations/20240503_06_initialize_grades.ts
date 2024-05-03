import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("grades", {
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

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("grades");
};
