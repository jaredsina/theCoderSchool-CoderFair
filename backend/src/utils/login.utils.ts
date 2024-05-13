import { newLogin } from "../types/login.types";

// Type guard for username and password
const isString = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  throw new Error("Incorrect data: username or password");
};

// Type narrow for the request body of a login
export const toNewLogin = (object: unknown): newLogin => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data" + object);
  }
  if ("username" in object && "password" in object) {
    const newLogin: newLogin = {
      username: isString(object.username),
      password: isString(object.password),
    };
    return newLogin;
  }
  throw new Error("Incorrect data: username or password");
};
