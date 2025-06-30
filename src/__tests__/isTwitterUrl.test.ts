import { isTwitterUrl } from "../isXUrl";

describe("isTwitterUrl", () => {
  describe("Valid Twitter/X URLs", () => {
    it("should return true for twitter.com URLs with http protocol", () => {
      expect(isTwitterUrl("http://twitter.com")).toBe(true);
      expect(isTwitterUrl("http://twitter.com/username")).toBe(true);
      expect(isTwitterUrl("http://twitter.com/status/123")).toBe(true);
    });

    it("should return true for twitter.com URLs with https protocol", () => {
      expect(isTwitterUrl("https://twitter.com")).toBe(true);
      expect(isTwitterUrl("https://twitter.com/username")).toBe(true);
      expect(isTwitterUrl("https://twitter.com/status/123")).toBe(true);
    });

    it("should return true for www.twitter.com URLs", () => {
      expect(isTwitterUrl("http://www.twitter.com")).toBe(true);
      expect(isTwitterUrl("https://www.twitter.com")).toBe(true);
      expect(isTwitterUrl("https://www.twitter.com/username")).toBe(true);
    });

    it("should return true for x.com URLs", () => {
      expect(isTwitterUrl("http://x.com")).toBe(true);
      expect(isTwitterUrl("https://x.com")).toBe(true);
      expect(isTwitterUrl("https://x.com/username")).toBe(true);
    });

    it("should return true for www.x.com URLs", () => {
      expect(isTwitterUrl("http://www.x.com")).toBe(true);
      expect(isTwitterUrl("https://www.x.com")).toBe(true);
      expect(isTwitterUrl("https://www.x.com/username")).toBe(true);
    });

    it("should return true for subdomains of twitter.com", () => {
      expect(isTwitterUrl("https://mobile.twitter.com")).toBe(true);
      expect(isTwitterUrl("https://api.twitter.com")).toBe(true);
      expect(isTwitterUrl("https://developer.twitter.com")).toBe(true);
      expect(isTwitterUrl("http://custom.twitter.com/page")).toBe(true);
    });

    it("should handle URLs with trailing whitespace", () => {
      expect(isTwitterUrl(" https://twitter.com ")).toBe(true);
      expect(isTwitterUrl("\t https://www.x.com \n")).toBe(true);
    });
  });

  describe("Invalid Twitter/X URLs", () => {
    it("should return false for non-Twitter/X URLs", () => {
      expect(isTwitterUrl("https://google.com")).toBe(false);
      expect(isTwitterUrl("https://facebook.com")).toBe(false);
      expect(isTwitterUrl("https://example.com")).toBe(false);
      expect(isTwitterUrl("https://nottwitter.com")).toBe(false);
    });

    it("should return false for URLs with invalid protocols", () => {
      expect(isTwitterUrl("ftp://twitter.com")).toBe(false);
      expect(isTwitterUrl("file://twitter.com")).toBe(false);
      expect(isTwitterUrl("ws://twitter.com")).toBe(false);
      expect(isTwitterUrl("twitter.com")).toBe(false); // missing protocol
    });

    it("should return false for domains that only contain 'twitter' but are not Twitter domains", () => {
      expect(isTwitterUrl("https://twitter-clone.com")).toBe(false);
      expect(isTwitterUrl("https://mytwitter.com")).toBe(false);
      expect(isTwitterUrl("https://twitter.example.com")).toBe(false);
      expect(isTwitterUrl("https://twitter.net")).toBe(false);
    });

    it("should return false for domains that only contain 'x' but are not X domains", () => {
      expect(isTwitterUrl("https://x-clone.com")).toBe(false);
      expect(isTwitterUrl("https://myx.com")).toBe(false);
      expect(isTwitterUrl("https://x.example.com")).toBe(false);
      expect(isTwitterUrl("https://x.net")).toBe(false);
    });

    it("should return false for malformed URLs", () => {
      expect(isTwitterUrl("not-a-url")).toBe(false);
      expect(isTwitterUrl("://twitter.com")).toBe(false);
      expect(isTwitterUrl("https://")).toBe(false);
      expect(isTwitterUrl("invalid://twitter.com")).toBe(false);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(isTwitterUrl("")).toBe(false);
      expect(isTwitterUrl(" ")).toBe(false);
      expect(isTwitterUrl("\t")).toBe(false);
      expect(isTwitterUrl("\n")).toBe(false);
    });

    it("should return false for URLs with twitter.com as path but different domain", () => {
      expect(isTwitterUrl("https://example.com/twitter.com")).toBe(false);
      expect(isTwitterUrl("https://evil.com/twitter.com/login")).toBe(false);
    });
  });

  describe("Edge cases", () => {
    it("should handle case-insensitive domain matching", () => {
      expect(isTwitterUrl("https://TWITTER.COM")).toBe(true);
      expect(isTwitterUrl("https://Twitter.Com")).toBe(true);
      expect(isTwitterUrl("https://WWW.X.COM")).toBe(true);
      expect(isTwitterUrl("https://X.COM")).toBe(true);
    });

    it("should handle complex Twitter/X URLs", () => {
      expect(
        isTwitterUrl("https://twitter.com/username/status/1234567890123456789")
      ).toBe(true);
      expect(
        isTwitterUrl("https://x.com/username/status/1234567890123456789")
      ).toBe(true);
      expect(
        isTwitterUrl(
          "https://twitter.com/i/status/1234567890123456789?s=20&t=abc123"
        )
      ).toBe(true);
    });

    it("should handle URLs with ports", () => {
      expect(isTwitterUrl("https://twitter.com:443")).toBe(true);
      expect(isTwitterUrl("http://twitter.com:80")).toBe(true);
      expect(isTwitterUrl("https://x.com:8080")).toBe(true);
    });

    it("should handle URLs with authentication info", () => {
      expect(isTwitterUrl("https://user:pass@twitter.com")).toBe(true);
      expect(isTwitterUrl("https://user@x.com")).toBe(true);
    });
  });
});
