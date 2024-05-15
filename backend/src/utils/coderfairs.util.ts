import { CoderFair } from "../types/coderfairs.types";
import { isObject, parseDate, parseString } from "./index.utils";

export const toNewCoderfair = (object: unknown): CoderFair => {
  if (isObject(object) && "fairDate" in object) {
    const newCoderfair: CoderFair = {
      fairDate: parseDate(object.fairDate),
      description:
        "description" in object ? parseString(object.description) : undefined,
    };
    return newCoderfair;
  }
  throw new Error("Incorrect or missing data for coderfair");
};
