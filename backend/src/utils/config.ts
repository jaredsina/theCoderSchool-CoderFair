import * as dotenv from "dotenv";
dotenv.config();

const isPort = (port: unknown): port is number => {
  return Number.isInteger(port);
};

const parsePort = (port: unknown): number => {
  const portNumber = Number(port);
  if (!port || !isPort(portNumber)) {
    throw new Error("Incorrect or missing PORT" + port);
  }
  return portNumber;
};

const parseDbUrl = (url: unknown): string => {
  if (!url || !(typeof url === "string")) {
    throw new Error("Incorrect or missing URL" + url);
  }
  return url;
};

export const DATABASE_URL: string = parseDbUrl(process.env.DATABASE_URL);
export const SERVER_PORT: number = parsePort(process.env.SERVER_PORT);
