import { isValidHttpUrl } from "../isValidHttpUrl";

describe("isValidHttpUrl", () => {
  it("should return true for valid http and https URLs", () => {
    expect(isValidHttpUrl("https://google.com")).toBe(true);
    expect(isValidHttpUrl("http://example.com")).toBe(true);
  });

  it("should return false for non-http(s) URLs", () => {
    expect(isValidHttpUrl("ftp://fileserver.com")).toBe(false);
    expect(isValidHttpUrl("file:///Users/yourname/file.txt")).toBe(false);
    expect(isValidHttpUrl("javascript:alert(1)")).toBe(false);
  });

  it("should return false for invalid URLs", () => {
    expect(isValidHttpUrl("not-a-link")).toBe(false);
    expect(isValidHttpUrl("random string")).toBe(false);
    expect(isValidHttpUrl("")).toBe(false);
  });

  it("should return false for URLs missing protocol", () => {
    expect(isValidHttpUrl("www.google.com")).toBe(false);
    expect(isValidHttpUrl("google.com")).toBe(false);
  });
});
