import { newProject } from "../types/projects.types";
import { isObject, parseNumber, parseString } from "./index.utils";

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
