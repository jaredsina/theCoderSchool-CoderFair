import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config";
import { SequelizeStorage, Umzug } from "umzug";

// Sequelize streamlines interaction between the application and our postgresql database
export const sequelize = new Sequelize(DATABASE_URL);

// Configuration for the Umzug migrator
const migrationConf = {
  migrations: {
    glob: "migrations/*.ts",
  },
  storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

// Rolls back the latest migration file. Run it from the command line script 'rollback'
export const rollBackMigrations = async () => {
  // Need to authenticate because we are running this seperate from the express app
  await sequelize.authenticate();
  const migrator = new Umzug(migrationConf);
  await migrator.down();
};

// Umzug allows the use of migration files to update the database schema smoothly over time
const runMigrations = async () => {
  const migrator = new Umzug(migrationConf);

  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => {
      mig.name;
    }),
  });
};

export const connectToDatabase = async () => {
  try {
    console.log("Trying to connect to database...");
    await sequelize.authenticate();
    await runMigrations();
    console.log("Connection established successfully");
    await sequelize.close();
  } catch (error) {
    console.log("Error connecting to database" + error);
  }
};
