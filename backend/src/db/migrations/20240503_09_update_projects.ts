import { DataTypes } from "sequelize";
import { sequelize } from "../index";

const queryInterface = sequelize.getQueryInterface();

// Fix: Rank should be retrieved using coderfair project grades
// Fix: Overall score should be retrieved using grade scores
// Eliminate the risk of inconsistency between these attributes and the actual values

export const up = async (): Promise<void> => {
  await queryInterface.removeColumn("projects", "rank");
  await queryInterface.removeColumn("projects", "overall_score");
};

export const down = async (): Promise<void> => {
  await queryInterface.addColumn("projects", "rank", {
    type: DataTypes.INTEGER,
    allowNull: true,
  });
  await queryInterface.addColumn("projects", "overall_score", {
    type: DataTypes.INTEGER,
    allowNull: true,
  });
};
