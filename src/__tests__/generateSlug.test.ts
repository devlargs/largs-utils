import { generateSlug } from "../generateSlug";

describe("generateSlug", () => {
  it("should convert string to lowercase and replace spaces with hyphens", () => {
    expect(generateSlug("Hello World")).toBe("hello-world");
  });

  it("should remove special characters and trim hyphens", () => {
    expect(generateSlug("  Hello @#$ World!  ")).toBe("hello-world");
  });

  it("should handle multiple consecutive non-alphanumerics", () => {
    expect(generateSlug("This---is_a_test")).toBe("this-is-a-test");
  });

  it("should return empty string for input with only non-alphanumerics", () => {
    expect(generateSlug("!!!")).toBe("");
  });

  it("should preserve numbers in the slug", () => {
    expect(generateSlug("Product 123")).toBe("product-123");
  });

  it("should handle already well-formatted slug", () => {
    expect(generateSlug("already-slugified")).toBe("already-slugified");
  });

  test("should generate slug from simple string", () => {
    expect(generateSlug("Hello World")).toBe("hello-world");
    expect(generateSlug("This is a test")).toBe("this-is-a-test");
  });

  test("should handle special characters", () => {
    expect(generateSlug("Hello, World!")).toBe("hello-world");
    expect(generateSlug("Test@#$%^&*()")).toBe("test");
  });

  test("should handle numbers", () => {
    expect(generateSlug("Version 2.0")).toBe("version-2-0");
    expect(generateSlug("Test123")).toBe("test123");
  });

  test("should handle multiple spaces and hyphens", () => {
    expect(generateSlug("  Multiple   Spaces  ")).toBe("multiple-spaces");
    expect(generateSlug("already-hyphenated")).toBe("already-hyphenated");
  });

  test("should handle empty string", () => {
    expect(generateSlug("")).toBe("");
  });

  test("should handle error cases gracefully", () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Test with null/undefined to trigger error handling
    expect(generateSlug(null as any)).toBeUndefined();
    expect(generateSlug(undefined as any)).toBeUndefined();

    // Test with non-string input that would cause an error
    expect(generateSlug(123 as any)).toBeUndefined();

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
