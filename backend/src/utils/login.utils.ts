import { newLogin } from "../types/login.types";
import { isObject, parseString } from "./index.utils";

// Type narrow for the request body of a login
export const toNewLogin = (object: unknown): newLogin => {
  if (isObject(object) && "username" in object && "password" in object) {
    const newLogin: newLogin = {
      username: parseString(object.username),
      password: parseString(object.password),
    };
    return newLogin;
  }
  throw new Error("Incorrect data: username or password");
};
