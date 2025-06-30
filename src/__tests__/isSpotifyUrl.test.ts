import { isSpotifyUrl } from "../isSpotifyUrl";

describe("isSpotifyUrl", () => {
  describe("Valid Spotify URLs", () => {
    it("should return true for spotify.com URLs with http protocol", () => {
      expect(isSpotifyUrl("http://spotify.com")).toBe(true);
      expect(isSpotifyUrl("http://spotify.com/track/123")).toBe(true);
      expect(isSpotifyUrl("http://spotify.com/playlist/456")).toBe(true);
    });

    it("should return true for spotify.com URLs with https protocol", () => {
      expect(isSpotifyUrl("https://spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://spotify.com/track/123")).toBe(true);
      expect(isSpotifyUrl("https://spotify.com/album/789")).toBe(true);
    });

    it("should return true for www.spotify.com URLs", () => {
      expect(isSpotifyUrl("http://www.spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://www.spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://www.spotify.com/artist/123")).toBe(true);
    });

    it("should return true for open.spotify.com URLs", () => {
      expect(isSpotifyUrl("http://open.spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://open.spotify.com")).toBe(true);
      expect(
        isSpotifyUrl("https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh")
      ).toBe(true);
      expect(
        isSpotifyUrl("https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M")
      ).toBe(true);
    });

    it("should return true for subdomains of spotify.com", () => {
      expect(isSpotifyUrl("https://accounts.spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://api.spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://developer.spotify.com")).toBe(true);
      expect(isSpotifyUrl("http://custom.spotify.com/page")).toBe(true);
    });

    it("should handle URLs with trailing whitespace", () => {
      expect(isSpotifyUrl(" https://spotify.com ")).toBe(true);
      expect(isSpotifyUrl("\t https://open.spotify.com \n")).toBe(true);
    });
  });

  describe("Invalid Spotify URLs", () => {
    it("should return false for non-Spotify URLs", () => {
      expect(isSpotifyUrl("https://google.com")).toBe(false);
      expect(isSpotifyUrl("https://youtube.com")).toBe(false);
      expect(isSpotifyUrl("https://apple.com")).toBe(false);
      expect(isSpotifyUrl("https://notspotify.com")).toBe(false);
    });

    it("should return false for URLs with invalid protocols", () => {
      expect(isSpotifyUrl("ftp://spotify.com")).toBe(false);
      expect(isSpotifyUrl("file://spotify.com")).toBe(false);
      expect(isSpotifyUrl("ws://spotify.com")).toBe(false);
      expect(isSpotifyUrl("spotify.com")).toBe(false); // missing protocol
    });

    it("should return false for domains that only contain 'spotify' but are not Spotify domains", () => {
      expect(isSpotifyUrl("https://spotify-clone.com")).toBe(false);
      expect(isSpotifyUrl("https://myspotify.com")).toBe(false);
      expect(isSpotifyUrl("https://spotify.example.com")).toBe(false);
      expect(isSpotifyUrl("https://spotify.net")).toBe(false);
    });

    it("should return false for malformed URLs", () => {
      expect(isSpotifyUrl("not-a-url")).toBe(false);
      expect(isSpotifyUrl("://spotify.com")).toBe(false);
      expect(isSpotifyUrl("https://")).toBe(false);
      expect(isSpotifyUrl("invalid://spotify.com")).toBe(false);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(isSpotifyUrl("")).toBe(false);
      expect(isSpotifyUrl(" ")).toBe(false);
      expect(isSpotifyUrl("\t")).toBe(false);
      expect(isSpotifyUrl("\n")).toBe(false);
    });

    it("should return false for URLs with spotify.com as path but different domain", () => {
      expect(isSpotifyUrl("https://example.com/spotify.com")).toBe(false);
      expect(isSpotifyUrl("https://evil.com/spotify.com/track")).toBe(false);
    });
  });

  describe("Edge cases", () => {
    it("should handle case-insensitive domain matching", () => {
      expect(isSpotifyUrl("https://SPOTIFY.COM")).toBe(true);
      expect(isSpotifyUrl("https://Spotify.Com")).toBe(true);
      expect(isSpotifyUrl("https://OPEN.SPOTIFY.COM")).toBe(true);
    });

    it("should handle complex Spotify URLs", () => {
      expect(
        isSpotifyUrl(
          "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh?si=abc123"
        )
      ).toBe(true);
      expect(
        isSpotifyUrl(
          "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=def456"
        )
      ).toBe(true);
      expect(
        isSpotifyUrl(
          "https://open.spotify.com/album/1DFixLWuPkv3KT3TnV35m3?si=ghi789"
        )
      ).toBe(true);
    });

    it("should handle URLs with ports", () => {
      expect(isSpotifyUrl("https://spotify.com:443")).toBe(true);
      expect(isSpotifyUrl("http://spotify.com:80")).toBe(true);
      expect(isSpotifyUrl("https://open.spotify.com:8080")).toBe(true);
    });

    it("should handle URLs with authentication info", () => {
      expect(isSpotifyUrl("https://user:pass@spotify.com")).toBe(true);
      expect(isSpotifyUrl("https://user@open.spotify.com")).toBe(true);
    });
  });
});
