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
