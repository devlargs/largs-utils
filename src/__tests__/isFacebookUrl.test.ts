import { isFacebookUrl } from "../isFacebookUrl";

describe("isFacebookUrl", () => {
  describe("Valid Facebook URLs", () => {
    it("should return true for facebook.com URLs with http protocol", () => {
      expect(isFacebookUrl("http://facebook.com")).toBe(true);
      expect(isFacebookUrl("http://facebook.com/profile")).toBe(true);
      expect(isFacebookUrl("http://facebook.com/profile?id=123")).toBe(true);
    });

    it("should return true for facebook.com URLs with https protocol", () => {
      expect(isFacebookUrl("https://facebook.com")).toBe(true);
      expect(isFacebookUrl("https://facebook.com/profile")).toBe(true);
      expect(isFacebookUrl("https://facebook.com/profile?id=123")).toBe(true);
    });

    it("should return true for www.facebook.com URLs", () => {
      expect(isFacebookUrl("http://www.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://www.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://www.facebook.com/profile")).toBe(true);
    });

    it("should return true for m.facebook.com URLs", () => {
      expect(isFacebookUrl("http://m.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://m.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://m.facebook.com/profile")).toBe(true);
    });

    it("should return true for web.facebook.com URLs", () => {
      expect(isFacebookUrl("http://web.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://web.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://web.facebook.com/profile")).toBe(true);
    });

    it("should return true for fb.com URLs", () => {
      expect(isFacebookUrl("http://fb.com")).toBe(true);
      expect(isFacebookUrl("https://fb.com")).toBe(true);
      expect(isFacebookUrl("https://fb.com/profile")).toBe(true);
    });

    it("should return true for www.fb.com URLs", () => {
      expect(isFacebookUrl("http://www.fb.com")).toBe(true);
      expect(isFacebookUrl("https://www.fb.com")).toBe(true);
      expect(isFacebookUrl("https://www.fb.com/profile")).toBe(true);
    });

    it("should return true for subdomains of facebook.com", () => {
      expect(isFacebookUrl("https://business.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://developers.facebook.com")).toBe(true);
      expect(isFacebookUrl("https://api.facebook.com")).toBe(true);
      expect(isFacebookUrl("http://custom.facebook.com/page")).toBe(true);
    });

    it("should handle URLs with trailing whitespace", () => {
      expect(isFacebookUrl(" https://facebook.com ")).toBe(true);
      expect(isFacebookUrl("\t https://www.facebook.com \n")).toBe(true);
    });
  });

  describe("Invalid Facebook URLs", () => {
    it("should return false for non-Facebook URLs", () => {
      expect(isFacebookUrl("https://google.com")).toBe(false);
      expect(isFacebookUrl("https://twitter.com")).toBe(false);
      expect(isFacebookUrl("https://example.com")).toBe(false);
      expect(isFacebookUrl("https://notfacebook.com")).toBe(false);
    });

    it("should return false for URLs with invalid protocols", () => {
      expect(isFacebookUrl("ftp://facebook.com")).toBe(false);
      expect(isFacebookUrl("file://facebook.com")).toBe(false);
      expect(isFacebookUrl("ws://facebook.com")).toBe(false);
      expect(isFacebookUrl("facebook.com")).toBe(false); // missing protocol
    });

    it("should return false for domains that only contain 'facebook' but are not Facebook domains", () => {
      expect(isFacebookUrl("https://facebook-clone.com")).toBe(false);
      expect(isFacebookUrl("https://myfacebook.com")).toBe(false);
      expect(isFacebookUrl("https://facebook.example.com")).toBe(false);
      expect(isFacebookUrl("https://facebook.net")).toBe(false);
    });

    it("should return false for malformed URLs", () => {
      expect(isFacebookUrl("not-a-url")).toBe(false);
      expect(isFacebookUrl("://facebook.com")).toBe(false);
      expect(isFacebookUrl("https://")).toBe(false);
      expect(isFacebookUrl("invalid://facebook.com")).toBe(false);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(isFacebookUrl("")).toBe(false);
      expect(isFacebookUrl(" ")).toBe(false);
      expect(isFacebookUrl("\t")).toBe(false);
      expect(isFacebookUrl("\n")).toBe(false);
    });

    it("should return false for URLs with facebook.com as path but different domain", () => {
      expect(isFacebookUrl("https://example.com/facebook.com")).toBe(false);
      expect(isFacebookUrl("https://evil.com/facebook.com/login")).toBe(false);
    });
  });

  describe("Edge cases", () => {
    it("should handle case-insensitive domain matching", () => {
      expect(isFacebookUrl("https://FACEBOOK.COM")).toBe(true);
      expect(isFacebookUrl("https://Facebook.Com")).toBe(true);
      expect(isFacebookUrl("https://WWW.FACEBOOK.COM")).toBe(true);
    });

    it("should handle complex Facebook URLs", () => {
      expect(
        isFacebookUrl(
          "https://facebook.com/pages/category/Local-Business/Some-Business-123456789/"
        )
      ).toBe(true);
      expect(
        isFacebookUrl("https://www.facebook.com/profile.php?id=100000000000000")
      ).toBe(true);
      expect(
        isFacebookUrl(
          "https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com"
        )
      ).toBe(true);
    });

    it("should handle URLs with ports", () => {
      expect(isFacebookUrl("https://facebook.com:443")).toBe(true);
      expect(isFacebookUrl("http://facebook.com:80")).toBe(true);
      expect(isFacebookUrl("https://facebook.com:8080")).toBe(true);
    });

    it("should handle URLs with authentication info", () => {
      expect(isFacebookUrl("https://user:pass@facebook.com")).toBe(true);
      expect(isFacebookUrl("https://user@facebook.com")).toBe(true);
    });
  });
});
