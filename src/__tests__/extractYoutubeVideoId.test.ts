import { extractYouTubeVideoID } from "../extractYoutubeVideoId";
describe("extractYouTubeVideoID", () => {
  test("extracts video ID from standard YouTube watch URL", () => {
    const url = "https://www.youtube.com/watch?v=QFaFIcGhPoM";
    expect(extractYouTubeVideoID(url)).toBe("QFaFIcGhPoM");
  });

  test("extracts video ID with additional query params", () => {
    const url =
      "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3";
    expect(extractYouTubeVideoID(url)).toBe("QFaFIcGhPoM");
  });

  test("extracts video ID from youtu.be short URL", () => {
    const url = "https://youtu.be/JWJz_MS1-I8";
    expect(extractYouTubeVideoID(url)).toBe("JWJz_MS1-I8");
  });

  test("extracts video ID from embed URL", () => {
    const url = "https://www.youtube.com/embed/JWJz_MS1-I8";
    expect(extractYouTubeVideoID(url)).toBe("JWJz_MS1-I8");
  });

  test("extracts video ID from shorts URL", () => {
    const url = "https://www.youtube.com/shorts/JWJz_MS1-I8";
    expect(extractYouTubeVideoID(url)).toBe("JWJz_MS1-I8");
  });

  test("extracts video ID from /v/ legacy URL", () => {
    const url = "https://www.youtube.com/v/JWJz_MS1-I8";
    expect(extractYouTubeVideoID(url)).toBe("JWJz_MS1-I8");
  });

  test("returns null for non-YouTube URL", () => {
    const url = "https://www.example.com/watch?v=notayoutubeurl";
    expect(extractYouTubeVideoID(url)).toBeNull();
  });

  test("returns null for empty string", () => {
    expect(extractYouTubeVideoID("")).toBeNull();
  });

  test("returns null for malformed video ID", () => {
    const url = "https://www.youtube.com/watch?v=abc";
    expect(extractYouTubeVideoID(url)).toBeNull();
  });
});
