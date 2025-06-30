export const isYoutubeUrl = (youtubeUrl: string): boolean => {
  try {
    const trimmed = youtubeUrl.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtu.be",
      "www.youtu.be",
    ];

    const isValidProtocol = validProtocols.includes(protocol);
    const isYoutubeDomain =
      validDomains.includes(hostname) || hostname.endsWith(".youtube.com");

    return isValidProtocol && isYoutubeDomain;
  } catch {
    return false;
  }
};
