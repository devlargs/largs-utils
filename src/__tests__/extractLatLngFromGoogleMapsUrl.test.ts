import { extractLatLngFromGoogleMapsUrl } from "../extractLatLngFromGoogleMapsUrl";

describe("extractLatLngFromGoogleMapsUrl", () => {
  it("should extract valid latitude and longitude from a URL with @coords", () => {
    const url = "https://www.google.com/maps/@40.7128,-74.0060,15z";
    expect(extractLatLngFromGoogleMapsUrl(url)).toEqual({
      latitude: 40.7128,
      longitude: -74.006,
    });
  });

  it("should handle coordinates with extra zoom and tilt parameters", () => {
    const url =
      "https://www.google.com/maps/@34.0522,-118.2437,14z/data=!3m1!1e3";
    expect(extractLatLngFromGoogleMapsUrl(url)).toEqual({
      latitude: 34.0522,
      longitude: -118.2437,
    });
  });

  it('should return null if "@" is not in the URL', () => {
    const url = "https://www.google.com/maps/place/New+York";
    expect(extractLatLngFromGoogleMapsUrl(url)).toBeNull();
  });

  it("should return null if coordinates are not valid numbers", () => {
    const url = "https://www.google.com/maps/@abc,def,15z";
    expect(extractLatLngFromGoogleMapsUrl(url)).toBeNull();
  });

  it("should return null if only one coordinate is present", () => {
    const url = "https://www.google.com/maps/@40.7128,";
    expect(extractLatLngFromGoogleMapsUrl(url)).toBeNull();
  });

  it("should ignore extra data after coordinates", () => {
    const url =
      "https://maps.google.com/maps/@48.8566,2.3522,14z/some/extra/path";
    expect(extractLatLngFromGoogleMapsUrl(url)).toEqual({
      latitude: 48.8566,
      longitude: 2.3522,
    });
  });

  it("should return null for malformed URLs", () => {
    const url = "@123";
    expect(extractLatLngFromGoogleMapsUrl(url)).toBeNull();
  });
});
