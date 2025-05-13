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
});
