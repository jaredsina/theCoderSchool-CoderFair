import { Sequelize } from "sequelize";
import { DATABASE_URL, NODE_ENV } from "../utils/config";
import { SequelizeStorage, Umzug, UmzugOptions } from "umzug";

// Sequelize streamlines interaction between the application and our postgresql database
export const sequelize: Sequelize = new Sequelize(
  DATABASE_URL,
  NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        ssl: true, // This is required by Render
      }
    : {}
);

// Configuration for the Umzug migrators
const migrationConf: UmzugOptions = {
  migrations: {
    glob: "src/db/migrations/*.ts",
  },
  storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
  logger: console,
};

// Rolls back the latest migration file. Run it from the command line script 'rollback'
export const rollBackMigrations = async (): Promise<void> => {
  // Need to authenticate because we are running this seperate from the express app
  await sequelize.authenticate();
  const migrator = new Umzug(migrationConf);
  await migrator.down();
};

// Umzug allows the use of migration files to update the database schema smoothly over time
const runMigrations = async (): Promise<void> => {
  const migrator = new Umzug(migrationConf);
  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};

export const connectToDatabase = async (): Promise<void> => {
  try {
    console.log("Trying to connect to database...");
    await sequelize.authenticate();
    await runMigrations();
    console.log("Connection established successfully");
  } catch (error) {
    console.log("Error connecting to database" + error);
  }
};
