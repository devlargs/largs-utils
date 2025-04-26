export const extractLatLngFromGoogleMapsUrl = (url: string) => {
  try {
    const atIndex = url.indexOf("@");
    if (atIndex === -1) return null;

    const coordsPart = url.substring(atIndex + 1).split(",");
    const latitude = parseFloat(coordsPart[0]);
    const longitude = parseFloat(coordsPart[1]);

    if (isNaN(latitude) || isNaN(longitude)) return null;

    return { latitude, longitude };
  } catch (error) {
    console.error("Failed to extract coordinates:", error);
    return null;
  }
};
