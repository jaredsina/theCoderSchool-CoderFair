// Type guard for strings in the request body
export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const isObject = (object: unknown): object is object => {
  return typeof object === "object";
};

export const parseNumber = (num: unknown): number => {
  if (!num || typeof num !== "number") {
    throw new Error("Incorrect or missing data " + num);
  }
  return num;
};

export const parseString = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error("Incorrect or missing data " + text);
  }
  return text;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
export const parseDate = (date: unknown): Date => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date " + date);
  }
  return new Date(date);
};
