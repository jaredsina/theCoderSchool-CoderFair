import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Judges } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async () => {
  await queryInterface.createTable<Judges>("judges", {
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

export const down = async () => {
  await queryInterface.dropTable("judges");
};
