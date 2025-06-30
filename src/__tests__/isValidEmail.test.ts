import { isValidEmail } from "../isValidEmail";

describe("isValidEmail", () => {
  test("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
    expect(isValidEmail("test+tag@example.org")).toBe(true);
  });

  test("should return false for invalid email addresses", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("test@")).toBe(false);
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("test@example")).toBe(false);
  });

  test("should handle error cases gracefully", () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Mock the regex test method to throw an error
    const originalTest = RegExp.prototype.test;
    RegExp.prototype.test = jest.fn().mockImplementation(() => {
      throw new Error("Test error");
    });

    expect(isValidEmail("test@example.com")).toBeUndefined();

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();

    // Restore the original test method
    RegExp.prototype.test = originalTest;
  });
});
