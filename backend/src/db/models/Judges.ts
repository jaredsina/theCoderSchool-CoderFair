import { Judges } from "../../types/models.types";
import { sequelize } from "../index";
import { DataTypes } from "sequelize";

Judges.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { sequelize, underscored: true, timestamps: false, modelName: "judges" }
);

export { Judges };
