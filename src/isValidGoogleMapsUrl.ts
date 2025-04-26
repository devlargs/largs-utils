export const isValidGoogleMapsUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    const isGoogleMapsDomain =
      hostname === "www.google.com" || hostname === "maps.google.com";

    const isMapsPath = parsedUrl.pathname.startsWith("/maps");

    if (!(isGoogleMapsDomain && isMapsPath)) return false;

    const latLngRegex = /@(-?\d+(\.\d+)?),(-?\d+(\.\d+)?)/;

    return latLngRegex.test(parsedUrl.href);
  } catch (error) {
    return false;
  }
};
