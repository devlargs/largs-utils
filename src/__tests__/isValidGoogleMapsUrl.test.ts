import { isValidGoogleMapsUrl } from "../isValidGoogleMapsUrl";

describe("isValidGoogleMapsUrl", () => {
  it("should return true for valid Google Maps URL with lat/lng in @ format", () => {
    expect(
      isValidGoogleMapsUrl("https://www.google.com/maps/@40.7128,-74.0060,15z")
    ).toBe(true);
    expect(
      isValidGoogleMapsUrl(
        "https://maps.google.com/maps/@34.0522,-118.2437,12z"
      )
    ).toBe(true);
  });

  it("should return false for Google Maps URL without lat/lng", () => {
    expect(
      isValidGoogleMapsUrl("https://www.google.com/maps/place/New+York")
    ).toBe(false);
  });

  it("should return false for non-Google Maps domains", () => {
    expect(
      isValidGoogleMapsUrl("https://www.example.com/maps/@40.7128,-74.0060")
    ).toBe(false);
  });

  it("should return false for malformed URLs", () => {
    expect(isValidGoogleMapsUrl("not-a-valid-url")).toBe(false);
  });

  it("should return false for correct domain but incorrect path", () => {
    expect(
      isValidGoogleMapsUrl("https://www.google.com/search?q=40.7128,-74.0060")
    ).toBe(false);
  });

  it('should return false if lat/lng format is missing the "@" symbol', () => {
    expect(
      isValidGoogleMapsUrl("https://www.google.com/maps/40.7128,-74.0060")
    ).toBe(false);
  });
});
