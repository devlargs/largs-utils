import { isValidSocialLink } from "../isValidSocialLink";

describe("isValidSocialLink", () => {
  describe("Facebook URLs", () => {
    test("should return true for valid Facebook URLs", () => {
      expect(
        isValidSocialLink("https://facebook.com/profile", "facebook")
      ).toBe(true);
      expect(
        isValidSocialLink("https://www.facebook.com/pages", "facebook")
      ).toBe(true);
      expect(
        isValidSocialLink("https://m.facebook.com/mobile", "facebook")
      ).toBe(true);
      expect(
        isValidSocialLink("https://web.facebook.com/page", "facebook")
      ).toBe(true);
      expect(isValidSocialLink("https://fb.com/short", "facebook")).toBe(true);
      expect(isValidSocialLink("https://www.fb.com/user", "facebook")).toBe(
        true
      );
      expect(
        isValidSocialLink("https://business.facebook.com/business", "facebook")
      ).toBe(true);
      expect(isValidSocialLink("http://facebook.com/profile", "facebook")).toBe(
        true
      );
    });

    test("should return false for invalid Facebook URLs", () => {
      expect(isValidSocialLink("https://twitter.com/user", "facebook")).toBe(
        false
      );
      expect(isValidSocialLink("ftp://facebook.com/profile", "facebook")).toBe(
        false
      );
      expect(isValidSocialLink("not-a-url", "facebook")).toBe(false);
      expect(isValidSocialLink("https://fake-facebook.com", "facebook")).toBe(
        false
      );
    });
  });

  describe("Instagram URLs", () => {
    test("should return true for valid Instagram URLs", () => {
      expect(
        isValidSocialLink("https://instagram.com/username", "instagram")
      ).toBe(true);
      expect(
        isValidSocialLink("https://www.instagram.com/p/ABC123", "instagram")
      ).toBe(true);
      expect(
        isValidSocialLink("https://m.instagram.com/username", "instagram")
      ).toBe(true);
      expect(
        isValidSocialLink("https://help.instagram.com/support", "instagram")
      ).toBe(true);
      expect(isValidSocialLink("http://instagram.com/user", "instagram")).toBe(
        true
      );
    });

    test("should return false for invalid Instagram URLs", () => {
      expect(isValidSocialLink("https://facebook.com/user", "instagram")).toBe(
        false
      );
      expect(
        isValidSocialLink("ftp://instagram.com/profile", "instagram")
      ).toBe(false);
      expect(isValidSocialLink("not-a-url", "instagram")).toBe(false);
      expect(isValidSocialLink("https://fake-instagram.com", "instagram")).toBe(
        false
      );
    });
  });

  describe("Spotify URLs", () => {
    test("should return true for valid Spotify URLs", () => {
      expect(
        isValidSocialLink("https://spotify.com/track/123", "spotify")
      ).toBe(true);
      expect(
        isValidSocialLink(
          "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh",
          "spotify"
        )
      ).toBe(true);
      expect(
        isValidSocialLink("https://www.spotify.com/artist/456", "spotify")
      ).toBe(true);
      expect(isValidSocialLink("https://accounts.spotify.com", "spotify")).toBe(
        true
      );
      expect(isValidSocialLink("http://spotify.com/playlist", "spotify")).toBe(
        true
      );
    });

    test("should return false for invalid Spotify URLs", () => {
      expect(isValidSocialLink("https://youtube.com/watch", "spotify")).toBe(
        false
      );
      expect(isValidSocialLink("ftp://spotify.com/track", "spotify")).toBe(
        false
      );
      expect(isValidSocialLink("not-a-url", "spotify")).toBe(false);
      expect(isValidSocialLink("https://fake-spotify.com", "spotify")).toBe(
        false
      );
    });
  });

  describe("Twitter URLs", () => {
    test("should return true for valid Twitter URLs", () => {
      expect(isValidSocialLink("https://twitter.com/username", "twitter")).toBe(
        true
      );
      expect(
        isValidSocialLink("https://www.twitter.com/status/123", "twitter")
      ).toBe(true);
      expect(
        isValidSocialLink("https://m.twitter.com/username", "twitter")
      ).toBe(true);
      expect(
        isValidSocialLink("https://api.twitter.com/endpoint", "twitter")
      ).toBe(true);
      expect(isValidSocialLink("http://twitter.com/user", "twitter")).toBe(
        true
      );
    });

    test("should return false for invalid Twitter URLs", () => {
      expect(isValidSocialLink("https://instagram.com/user", "twitter")).toBe(
        false
      );
      expect(isValidSocialLink("ftp://twitter.com/profile", "twitter")).toBe(
        false
      );
      expect(isValidSocialLink("not-a-url", "twitter")).toBe(false);
      expect(isValidSocialLink("https://fake-twitter.com", "twitter")).toBe(
        false
      );
    });
  });

  describe("YouTube URLs", () => {
    test("should return true for valid YouTube URLs", () => {
      expect(
        isValidSocialLink("https://youtube.com/watch?v=dQw4w9WgXcQ", "youtube")
      ).toBe(true);
      expect(
        isValidSocialLink(
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "youtube"
        )
      ).toBe(true);
      expect(isValidSocialLink("https://youtu.be/dQw4w9WgXcQ", "youtube")).toBe(
        true
      );
      expect(
        isValidSocialLink("https://www.youtu.be/dQw4w9WgXcQ", "youtube")
      ).toBe(true);
      expect(
        isValidSocialLink(
          "https://m.youtube.com/watch?v=dQw4w9WgXcQ",
          "youtube"
        )
      ).toBe(true);
      expect(
        isValidSocialLink("https://music.youtube.com/playlist", "youtube")
      ).toBe(true);
      expect(isValidSocialLink("http://youtube.com/channel", "youtube")).toBe(
        true
      );
    });

    test("should return false for invalid YouTube URLs", () => {
      expect(isValidSocialLink("https://vimeo.com/video", "youtube")).toBe(
        false
      );
      expect(isValidSocialLink("ftp://youtube.com/watch", "youtube")).toBe(
        false
      );
      expect(isValidSocialLink("not-a-url", "youtube")).toBe(false);
      expect(isValidSocialLink("https://fake-youtube.com", "youtube")).toBe(
        false
      );
    });
  });

  describe("Edge cases", () => {
    test("should handle URLs with extra whitespace", () => {
      expect(
        isValidSocialLink("  https://facebook.com/profile  ", "facebook")
      ).toBe(true);
      expect(
        isValidSocialLink("\thttps://instagram.com/user\n", "instagram")
      ).toBe(true);
    });

    test("should handle malformed URLs gracefully", () => {
      expect(isValidSocialLink("", "facebook")).toBe(false);
      expect(isValidSocialLink("https://", "instagram")).toBe(false);
      expect(isValidSocialLink("://malformed-url", "spotify")).toBe(false);
      expect(isValidSocialLink("javascript:alert(1)", "twitter")).toBe(false);
    });

    test("should be case insensitive for hostnames", () => {
      expect(
        isValidSocialLink("https://FACEBOOK.COM/profile", "facebook")
      ).toBe(true);
      expect(isValidSocialLink("https://Instagram.Com/user", "instagram")).toBe(
        true
      );
      expect(isValidSocialLink("https://YouTube.COM/watch", "youtube")).toBe(
        true
      );
    });
  });
});
