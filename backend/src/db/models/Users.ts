import { DataTypes } from "sequelize";
import { User } from "./models.types";
import { sequelize } from "../index";

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize, // we need to pass connection to instance
    timestamps: true,
    modelName: "user",
    underscored: true, // convert names to snake case
  }
);

export { User };
