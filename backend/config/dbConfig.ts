import * as dotenv from "dotenv";
dotenv.config();

interface Env {
  DATABASE_URL: string;
  SERVER_PORT: number;
}

const isPort = (port: unknown): port is number => {
  return Number.isInteger(port);
};

const parsePort = (port: unknown): number => {
  if (!port || !isPort(port)) {
    throw new Error("Incorrect or missing PORT" + port);
  }
  return port;
};

const parseDbUrl = (url: unknown): string => {
  if (!url || !(typeof url === "string")) {
    throw new Error("Incorrect or missing URL" + url);
  }
  return url;
};

export const dbConfig: Env = {
  DATABASE_URL: parseDbUrl(process.env.DATABASE_URL),
  SERVER_PORT: parsePort(process.env.SERVER_PORT),
};
