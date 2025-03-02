import { toKebabCase } from "../toKebabCase";

describe("toKebabCase", () => {
  test("should convert space-separated words to kebab case", () => {
    expect(toKebabCase("React Testing Library")).toBe("react-testing-library");
    expect(toKebabCase("Balanar Atropos")).toBe("balanar-atropos");
  });

  test("should handle leading and trailing spaces", () => {
    expect(toKebabCase("  Hello World  ")).toBe("hello-world");
  });

  test("should handle multiple spaces between words", () => {
    expect(toKebabCase("Multiple   Spaces Here")).toBe("multiple-spaces-here");
  });

  test("should remove non-alphanumeric characters", () => {
    expect(toKebabCase("Hello, World!")).toBe("hello-world");
    expect(toKebabCase("React@2025")).toBe("react2025");
  });

  test("should return an empty string for input with only special characters or spaces", () => {
    expect(toKebabCase(" !@# ")).toBe("");
  });

  test("should handle single-word inputs correctly", () => {
    expect(toKebabCase("JavaScript")).toBe("javascript");
  });
});
