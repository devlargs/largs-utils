import { coercedGet } from "../coercedGet";

describe("coercedGet", () => {
  const testData = {
    user: {
      id: 1,
      name: "John Doe",
      address: {
        city: "New York",
        zip: "10001",
      },
      posts: [
        { id: 1, title: "Hello World" },
        { id: 2, title: "Another Post" },
      ],
    },
  };

  test("should return the correct value for a valid path", () => {
    expect(coercedGet(testData, "user.name")).toBe("John Doe");
    expect(coercedGet(testData, "user.address.city")).toBe("New York");
    expect(coercedGet(testData, "user.posts[0].title")).toBe("Hello World");
  });

  test("should return undefined for an invalid path", () => {
    expect(coercedGet(testData, "user.age")).toBeUndefined();
    expect(coercedGet(testData, "user.address.country")).toBeUndefined();
    expect(coercedGet(testData, "user.posts[2].title")).toBeUndefined();
  });

  test("should return the default value if path is invalid", () => {
    expect(coercedGet(testData, "user.age", "N/A")).toBe("N/A");
    expect(coercedGet(testData, "user.address.country", "Unknown")).toBe(
      "Unknown"
    );
    expect(coercedGet(testData, "user.posts[2].title", "No Title")).toBe(
      "No Title"
    );
  });

  test("should handle array indices correctly", () => {
    expect(coercedGet(testData, "user.posts[1].title")).toBe("Another Post");
    expect(coercedGet(testData, "user.posts[1].id")).toBe(2);
  });

  test("should handle nested objects and arrays correctly", () => {
    expect(coercedGet(testData, "user.address.zip")).toBe("10001");
    expect(coercedGet(testData, "user.posts[0].title")).toBe("Hello World");
  });
});
