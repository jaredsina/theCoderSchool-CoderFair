import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("coderfairs", {
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
    fair_date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  await queryInterface.addColumn("projects", "coderfair_id", {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "coderfairs", key: "id" },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("coderfairs");
  await queryInterface.removeColumn("projects", "coderfair_id");
};
