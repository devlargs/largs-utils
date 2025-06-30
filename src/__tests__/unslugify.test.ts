import { unslugify } from "../unslugify";

describe("unslugify", () => {
  it("converts kebab-case to capitalized words", () => {
    expect(unslugify("my-awesome-title")).toBe("My Awesome Title");
  });

  it("converts snake_case to capitalized words", () => {
    expect(unslugify("hello_world_test")).toBe("Hello World Test");
  });

  it("handles mixed separators and spacing", () => {
    expect(unslugify("  this--is__a_test  ")).toBe("This Is A Test");
  });

  it("handles single word", () => {
    expect(unslugify("example")).toBe("Example");
  });

  it("returns empty string if input is empty", () => {
    expect(unslugify("")).toBe("");
  });

  test("should convert slug to readable text", () => {
    expect(unslugify("hello-world")).toBe("Hello World");
    expect(unslugify("this-is-a-test")).toBe("This Is A Test");
  });

  test("should handle underscores", () => {
    expect(unslugify("hello_world")).toBe("Hello World");
    expect(unslugify("this_is_a_test")).toBe("This Is A Test");
  });

  test("should handle mixed hyphens and underscores", () => {
    expect(unslugify("hello-world_test")).toBe("Hello World Test");
  });

  test("should handle multiple spaces", () => {
    expect(unslugify("hello--world")).toBe("Hello World");
    expect(unslugify("hello___world")).toBe("Hello World");
  });

  test("should handle empty string", () => {
    expect(unslugify("")).toBe("");
  });

  test("should handle error cases gracefully", () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Test with null/undefined to trigger error handling
    expect(unslugify(null as any)).toBeUndefined();
    expect(unslugify(undefined as any)).toBeUndefined();

    // Test with non-string input that would cause an error
    expect(unslugify(123 as any)).toBeUndefined();

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
