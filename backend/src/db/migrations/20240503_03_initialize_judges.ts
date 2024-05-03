import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("judges", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    coderfair_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "coderfairs",
        key: "id",
      },
    },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("judges");
};
