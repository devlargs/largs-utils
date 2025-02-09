import { camelToSentenceCase } from "..";

describe("camelToSentenceCase", () => {
  test("should convert camelCase to sentence case", () => {
    expect(camelToSentenceCase("helloWorld")).toBe("Hello World");
    expect(camelToSentenceCase("thisIsATest")).toBe("This Is A Test");
    expect(camelToSentenceCase("convertThisFunction")).toBe(
      "Convert This Function"
    );
  });

  test("should handle PascalCase correctly", () => {
    expect(camelToSentenceCase("HelloWorld")).toBe("Hello World");
    expect(camelToSentenceCase("ThisIsATest")).toBe("This Is A Test");
  });

  test("should handle acronyms within words", () => {
    expect(camelToSentenceCase("JSONParser")).toBe("JSON Parser");
    expect(camelToSentenceCase("APITestCase")).toBe("API Test Case");
  });

  test("should handle single words without modification", () => {
    expect(camelToSentenceCase("hello")).toBe("Hello");
    expect(camelToSentenceCase("Test")).toBe("Test");
  });

  test("should handle already spaced text without adding extra spaces", () => {
    expect(camelToSentenceCase("Already Spaced Text")).toBe(
      "Already Spaced Text"
    );
  });

  test("should handle empty strings gracefully", () => {
    expect(camelToSentenceCase("")).toBe("");
  });

  test("should handle strings with numbers", () => {
    expect(camelToSentenceCase("version2Update")).toBe("Version2Update");
  });
});
