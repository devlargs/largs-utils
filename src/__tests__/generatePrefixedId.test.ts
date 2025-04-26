import { generatePrefixedId } from "../generatePrefixedId";
import { v4 as uuidv4 } from "uuid";

jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

describe("generatePrefixedId", () => {
  it("should generate a string with the given prefix and a UUID", () => {
    const uuid = "123e4567-e89b-12d3-a456-426614174000";
    (uuidv4 as jest.Mock).mockReturnValue(uuid);

    const prefix = "user";
    const result = generatePrefixedId(prefix);

    expect(result.startsWith(`${prefix}_`)).toBe(true);

    const uuidPart = result.split("_")[1];
    expect(uuidPart).toBe(uuid);
  });
});
