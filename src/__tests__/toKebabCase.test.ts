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

  test("should convert string to kebab case", () => {
    expect(toKebabCase("Hello World")).toBe("hello-world");
    expect(toKebabCase("This is a test")).toBe("this-is-a-test");
  });

  test("should handle special characters", () => {
    expect(toKebabCase("Hello, World!")).toBe("hello-world");
    expect(toKebabCase("Test@#$%^&*()")).toBe("test");
  });

  test("should handle numbers", () => {
    expect(toKebabCase("Version 2.0")).toBe("version-20");
    expect(toKebabCase("Test123")).toBe("test123");
  });

  test("should handle multiple spaces", () => {
    expect(toKebabCase("  Multiple   Spaces  ")).toBe("multiple-spaces");
  });

  test("should handle empty string", () => {
    expect(toKebabCase("")).toBe("");
  });

  test("should handle error cases gracefully", () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Test with null/undefined to trigger error handling
    expect(toKebabCase(null as any)).toBeUndefined();
    expect(toKebabCase(undefined as any)).toBeUndefined();

    // Test with non-string input that would cause an error
    expect(toKebabCase(123 as any)).toBeUndefined();

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
