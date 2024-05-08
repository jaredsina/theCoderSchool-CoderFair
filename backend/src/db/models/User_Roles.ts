import { User_Roles } from "./models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

User_Roles.init(
  { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } },
  { sequelize, timestamps: false, underscored: true, modelName: "user_roles" }
);

export { User_Roles };
