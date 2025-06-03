import { getYoutubeThumbnail } from "../getYoutubeThumbnail";

describe("getYoutubeThumbnail", () => {
  it("should return the correct YouTube thumbnail URL", () => {
    const videoId = "dQw4w9WgXcQ";
    const expectedUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    expect(getYoutubeThumbnail(videoId)).toBe(expectedUrl);
  });
});
