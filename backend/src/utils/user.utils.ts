import { newUser } from "../types/user.types";
import { isObject, parseString } from "./index.utils";

// Validate request body before making a new user
export const toNewUser = (object: unknown): newUser => {
  if (
    isObject(object) &&
    "firstName" in object &&
    "lastName" in object &&
    "email" in object &&
    "username" in object &&
    "password" in object
  ) {
    const newUser: newUser = {
      firstName: parseString(object.firstName),
      lastName: parseString(object.lastName),
      email: parseString(object.email),
      username: parseString(object.username),
      passwordHash: parseString(object.password),
    };

    return newUser;
  }
  throw new Error("Incorrect data");
};
