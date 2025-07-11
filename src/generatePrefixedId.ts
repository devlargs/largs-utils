import { v4 as uuidv4 } from "uuid";

export const generatePrefixedId = (prefix: string) => `${prefix}_${uuidv4()}`;
