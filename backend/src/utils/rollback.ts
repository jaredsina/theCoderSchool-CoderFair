import { rollBackMigrations } from "./db";

rollBackMigrations().catch((error) => console.error(error));
