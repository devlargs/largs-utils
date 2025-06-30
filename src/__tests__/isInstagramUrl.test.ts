import { isInstagramUrl } from "../isInstagramUrl";

describe("isInstagramUrl", () => {
  describe("Valid Instagram URLs", () => {
    it("should return true for instagram.com URLs with http protocol", () => {
      expect(isInstagramUrl("http://instagram.com")).toBe(true);
      expect(isInstagramUrl("http://instagram.com/username")).toBe(true);
      expect(isInstagramUrl("http://instagram.com/p/ABC123")).toBe(true);
    });

    it("should return true for instagram.com URLs with https protocol", () => {
      expect(isInstagramUrl("https://instagram.com")).toBe(true);
      expect(isInstagramUrl("https://instagram.com/username")).toBe(true);
      expect(isInstagramUrl("https://instagram.com/p/ABC123")).toBe(true);
    });

    it("should return true for www.instagram.com URLs", () => {
      expect(isInstagramUrl("http://www.instagram.com")).toBe(true);
      expect(isInstagramUrl("https://www.instagram.com")).toBe(true);
      expect(isInstagramUrl("https://www.instagram.com/username")).toBe(true);
    });

    it("should return true for subdomains of instagram.com", () => {
      expect(isInstagramUrl("https://mobile.instagram.com")).toBe(true);
      expect(isInstagramUrl("https://api.instagram.com")).toBe(true);
      expect(isInstagramUrl("https://developer.instagram.com")).toBe(true);
      expect(isInstagramUrl("http://custom.instagram.com/page")).toBe(true);
    });

    it("should handle URLs with trailing whitespace", () => {
      expect(isInstagramUrl(" https://instagram.com ")).toBe(true);
      expect(isInstagramUrl("\t https://www.instagram.com \n")).toBe(true);
    });
  });

  describe("Invalid Instagram URLs", () => {
    it("should return false for non-Instagram URLs", () => {
      expect(isInstagramUrl("https://google.com")).toBe(false);
      expect(isInstagramUrl("https://facebook.com")).toBe(false);
      expect(isInstagramUrl("https://twitter.com")).toBe(false);
      expect(isInstagramUrl("https://example.com")).toBe(false);
      expect(isInstagramUrl("https://notinstagram.com")).toBe(false);
    });

    it("should return false for URLs with invalid protocols", () => {
      expect(isInstagramUrl("ftp://instagram.com")).toBe(false);
      expect(isInstagramUrl("file://instagram.com")).toBe(false);
      expect(isInstagramUrl("ws://instagram.com")).toBe(false);
      expect(isInstagramUrl("instagram.com")).toBe(false); // missing protocol
    });

    it("should return false for domains that only contain 'instagram' but are not Instagram domains", () => {
      expect(isInstagramUrl("https://instagram-clone.com")).toBe(false);
      expect(isInstagramUrl("https://myinstagram.com")).toBe(false);
      expect(isInstagramUrl("https://instagram.example.com")).toBe(false);
      expect(isInstagramUrl("https://instagram.net")).toBe(false);
    });

    it("should return false for malformed URLs", () => {
      expect(isInstagramUrl("not-a-url")).toBe(false);
      expect(isInstagramUrl("://instagram.com")).toBe(false);
      expect(isInstagramUrl("https://")).toBe(false);
      expect(isInstagramUrl("invalid://instagram.com")).toBe(false);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(isInstagramUrl("")).toBe(false);
      expect(isInstagramUrl(" ")).toBe(false);
      expect(isInstagramUrl("\t")).toBe(false);
      expect(isInstagramUrl("\n")).toBe(false);
    });

    it("should return false for URLs with instagram.com as path but different domain", () => {
      expect(isInstagramUrl("https://example.com/instagram.com")).toBe(false);
      expect(isInstagramUrl("https://evil.com/instagram.com/login")).toBe(
        false
      );
    });
  });

  describe("Edge cases", () => {
    it("should handle case-insensitive domain matching", () => {
      expect(isInstagramUrl("https://INSTAGRAM.COM")).toBe(true);
      expect(isInstagramUrl("https://Instagram.Com")).toBe(true);
      expect(isInstagramUrl("https://WWW.INSTAGRAM.COM")).toBe(true);
    });

    it("should handle complex Instagram URLs", () => {
      expect(
        isInstagramUrl("https://instagram.com/username/p/ABC123DEF456/")
      ).toBe(true);
      expect(
        isInstagramUrl(
          "https://www.instagram.com/p/ABC123/?utm_source=ig_web_copy_link"
        )
      ).toBe(true);
      expect(
        isInstagramUrl("https://instagram.com/reel/ABC123DEF456/?igshid=abc123")
      ).toBe(true);
    });

    it("should handle URLs with ports", () => {
      expect(isInstagramUrl("https://instagram.com:443")).toBe(true);
      expect(isInstagramUrl("http://instagram.com:80")).toBe(true);
      expect(isInstagramUrl("https://instagram.com:8080")).toBe(true);
    });

    it("should handle URLs with authentication info", () => {
      expect(isInstagramUrl("https://user:pass@instagram.com")).toBe(true);
      expect(isInstagramUrl("https://user@instagram.com")).toBe(true);
    });
  });
});
