import { Roles } from "./models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Roles.init(
  {
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
  },
  { sequelize, timestamps: false, underscored: true, modelName: "roles" }
);

export { Roles };
