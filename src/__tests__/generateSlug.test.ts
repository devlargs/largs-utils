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
});
