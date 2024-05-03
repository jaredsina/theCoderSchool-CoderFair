import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable("user_roles", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "roles", key: "id" },
    },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("user_roles");
};
