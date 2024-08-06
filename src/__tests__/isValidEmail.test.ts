import { isValidEmail } from "../isValidEmail";

describe("isValidEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co")).toBe(true);
    expect(isValidEmail("user+name@sub.domain.com")).toBe(true);
    expect(isValidEmail("user-name@domain.org")).toBe(true);
    expect(isValidEmail("user123@domain.com")).toBe(true);
  });

  it("should return false for invalid email addresses", () => {
    expect(isValidEmail("plainaddress")).toBe(false);
    expect(isValidEmail("@missingusername.com")).toBe(false);
    expect(isValidEmail("username@.com")).toBe(false);
    expect(isValidEmail("username@domain.")).toBe(false);
    expect(isValidEmail("username@domain..com")).toBe(false);
    expect(isValidEmail("username@domain.c")).toBe(false);
    expect(isValidEmail("username@domain.com ")).toBe(false); // trailing space
    expect(isValidEmail(" username@domain.com")).toBe(false); // leading space
    expect(isValidEmail("username@-domain.com")).toBe(false); // leading dash
  });
});
