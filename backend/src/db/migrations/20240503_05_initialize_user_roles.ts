import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { User_Roles } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async () => {
  await queryInterface.createTable<User_Roles>("user_roles", {
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

export const down = async () => {
  await queryInterface.dropTable("user_roles");
};
