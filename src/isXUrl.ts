export const isTwitterUrl = (twitterUrl: string): boolean => {
  try {
    const trimmed = twitterUrl.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = [
      "twitter.com",
      "www.twitter.com",
      "x.com",
      "www.x.com",
    ];

    const isValidProtocol = validProtocols.includes(protocol);
    const isTwitterDomain =
      validDomains.includes(hostname) || hostname.endsWith(".twitter.com");

    return isValidProtocol && isTwitterDomain;
  } catch {
    return false;
  }
};
