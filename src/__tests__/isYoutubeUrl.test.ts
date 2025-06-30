import { isYoutubeUrl } from "../isYoutubeUrl";

describe("isYoutubeUrl", () => {
  describe("Valid YouTube URLs", () => {
    it("should return true for youtube.com URLs with http protocol", () => {
      expect(isYoutubeUrl("http://youtube.com")).toBe(true);
      expect(isYoutubeUrl("http://youtube.com/watch?v=dQw4w9WgXcQ")).toBe(true);
      expect(isYoutubeUrl("http://youtube.com/channel/UCx123")).toBe(true);
    });

    it("should return true for youtube.com URLs with https protocol", () => {
      expect(isYoutubeUrl("https://youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
        true
      );
      expect(isYoutubeUrl("https://youtube.com/playlist?list=PLx123")).toBe(
        true
      );
    });

    it("should return true for www.youtube.com URLs", () => {
      expect(isYoutubeUrl("http://www.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://www.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
        true
      );
    });

    it("should return true for m.youtube.com URLs", () => {
      expect(isYoutubeUrl("http://m.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://m.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://m.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
        true
      );
    });

    it("should return true for youtu.be URLs", () => {
      expect(isYoutubeUrl("http://youtu.be/dQw4w9WgXcQ")).toBe(true);
      expect(isYoutubeUrl("https://youtu.be/dQw4w9WgXcQ")).toBe(true);
      expect(isYoutubeUrl("https://youtu.be/dQw4w9WgXcQ?t=123")).toBe(true);
    });

    it("should return true for www.youtu.be URLs", () => {
      expect(isYoutubeUrl("http://www.youtu.be/dQw4w9WgXcQ")).toBe(true);
      expect(isYoutubeUrl("https://www.youtu.be/dQw4w9WgXcQ")).toBe(true);
    });

    it("should return true for subdomains of youtube.com", () => {
      expect(isYoutubeUrl("https://music.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://tv.youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://gaming.youtube.com")).toBe(true);
      expect(isYoutubeUrl("http://custom.youtube.com/page")).toBe(true);
    });

    it("should handle URLs with trailing whitespace", () => {
      expect(isYoutubeUrl(" https://youtube.com ")).toBe(true);
      expect(isYoutubeUrl("\t https://youtu.be/dQw4w9WgXcQ \n")).toBe(true);
    });
  });

  describe("Invalid YouTube URLs", () => {
    it("should return false for non-YouTube URLs", () => {
      expect(isYoutubeUrl("https://google.com")).toBe(false);
      expect(isYoutubeUrl("https://vimeo.com")).toBe(false);
      expect(isYoutubeUrl("https://dailymotion.com")).toBe(false);
      expect(isYoutubeUrl("https://notyoutube.com")).toBe(false);
    });

    it("should return false for URLs with invalid protocols", () => {
      expect(isYoutubeUrl("ftp://youtube.com")).toBe(false);
      expect(isYoutubeUrl("file://youtube.com")).toBe(false);
      expect(isYoutubeUrl("ws://youtube.com")).toBe(false);
      expect(isYoutubeUrl("youtube.com")).toBe(false); // missing protocol
    });

    it("should return false for domains that only contain 'youtube' but are not YouTube domains", () => {
      expect(isYoutubeUrl("https://youtube-clone.com")).toBe(false);
      expect(isYoutubeUrl("https://myyoutube.com")).toBe(false);
      expect(isYoutubeUrl("https://youtube.example.com")).toBe(false);
      expect(isYoutubeUrl("https://youtube.net")).toBe(false);
    });

    it("should return false for malformed URLs", () => {
      expect(isYoutubeUrl("not-a-url")).toBe(false);
      expect(isYoutubeUrl("://youtube.com")).toBe(false);
      expect(isYoutubeUrl("https://")).toBe(false);
      expect(isYoutubeUrl("invalid://youtube.com")).toBe(false);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(isYoutubeUrl("")).toBe(false);
      expect(isYoutubeUrl(" ")).toBe(false);
      expect(isYoutubeUrl("\t")).toBe(false);
      expect(isYoutubeUrl("\n")).toBe(false);
    });

    it("should return false for URLs with youtube.com as path but different domain", () => {
      expect(isYoutubeUrl("https://example.com/youtube.com")).toBe(false);
      expect(isYoutubeUrl("https://evil.com/youtube.com/watch")).toBe(false);
    });
  });

  describe("Edge cases", () => {
    it("should handle case-insensitive domain matching", () => {
      expect(isYoutubeUrl("https://YOUTUBE.COM")).toBe(true);
      expect(isYoutubeUrl("https://YouTube.Com")).toBe(true);
      expect(isYoutubeUrl("https://YOUTU.BE")).toBe(true);
    });

    it("should handle complex YouTube URLs", () => {
      expect(
        isYoutubeUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=123s")
      ).toBe(true);
      expect(isYoutubeUrl("https://youtube.com/embed/dQw4w9WgXcQ")).toBe(true);
      expect(
        isYoutubeUrl(
          "https://www.youtube.com/playlist?list=PLrAXtmRdnEQy-QQWWHbelCDhfHyQiJbDc"
        )
      ).toBe(true);
    });

    it("should handle URLs with ports", () => {
      expect(isYoutubeUrl("https://youtube.com:443")).toBe(true);
      expect(isYoutubeUrl("http://youtube.com:80")).toBe(true);
      expect(isYoutubeUrl("https://youtu.be:8080")).toBe(true);
    });

    it("should handle URLs with authentication info", () => {
      expect(isYoutubeUrl("https://user:pass@youtube.com")).toBe(true);
      expect(isYoutubeUrl("https://user@youtu.be")).toBe(true);
    });
  });
});
