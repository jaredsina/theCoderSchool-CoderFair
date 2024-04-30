import { rollBackMigrations } from ".";
// Fix error running migrations from the build directory
// ts-node intercepts this file and converts it to js before node executes
import "ts-node/register";

rollBackMigrations().catch((error) => console.error(error));
