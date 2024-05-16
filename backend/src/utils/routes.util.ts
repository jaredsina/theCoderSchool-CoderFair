import {
  newUser,
  DecodedToken,
  newLogin,
  newProject,
  CoderFair,
  newRole,
} from "../types/routes.types";
import { isObject, parseString, parseNumber, parseDate } from "./index.utils";

// Type narrow methods for all routes
// Validates the request body has the appropriate properties for the model to be created

export const toNewCoderfair = (object: unknown): CoderFair => {
  if (isObject(object) && "fairDate" in object && "name" in object) {
    const newCoderfair: CoderFair = {
      name: parseString(object.name),
      fairDate: parseDate(object.fairDate),
      description:
        "description" in object ? parseString(object.description) : undefined,
    };
    return newCoderfair;
  }
  throw new Error("Incorrect or missing data for coderfair");
};

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

export const toNewProject = (object: unknown): newProject => {
  if (
    isObject(object) &&
    "name" in object &&
    "code_access_link" in object &&
    "coding_language" in object &&
    "project_username" in object &&
    "project_password" in object &&
    "coderfair_id" in object
  ) {
    const project: newProject = {
      name: parseString(object.name),
      description:
        "description" in object ? parseString(object.description) : undefined,
      presentation_video_url:
        "presentation_video_url" in object
          ? parseString(object.presentation_video_url)
          : undefined,
      code_access_link: parseString(object.code_access_link),
      coding_language: parseString(object.coding_language),
      project_username: parseString(object.project_username),
      project_password: parseString(object.project_password),
      notes: "notes" in object ? parseString(object.notes) : undefined,
      coderfair_id: parseNumber(object.coderfair_id),
    };
    return project;
  }
  throw new Error("Incorrect or mising data to create a new project");
};

export const parseDecodedToken = (object: unknown): DecodedToken => {
  if (
    isObject(object) &&
    "id" in object &&
    "username" in object &&
    "iat" in object
  ) {
    const decodedToken: DecodedToken = {
      id: parseNumber(object.id),
      username: parseString(object.username),
      iat: parseNumber(object.iat),
    };
    return decodedToken;
  }
  throw new Error("Incorrect decoded token data");
};

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

export const toNewRole = (object: unknown): newRole => {
  if (isObject(object) && "name" in object) {
    const newRole: newRole = {
      name: parseString(object.name),
    };
    return newRole;
  }
  throw new Error("Incorrect data when creating new role");
};
