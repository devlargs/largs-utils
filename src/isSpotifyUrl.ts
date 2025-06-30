export const isSpotifyUrl = (spotifyUrl: string): boolean => {
  try {
    const trimmed = spotifyUrl.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = ["spotify.com", "www.spotify.com", "open.spotify.com"];

    const isValidProtocol = validProtocols.includes(protocol);
    const isSpotifyDomain =
      validDomains.includes(hostname) || hostname.endsWith(".spotify.com");

    return isValidProtocol && isSpotifyDomain;
  } catch {
    return false;
  }
};
