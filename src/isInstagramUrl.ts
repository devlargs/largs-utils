export const isInstagramUrl = (instagramUrl: string): boolean => {
  try {
    const trimmed = instagramUrl.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = ["instagram.com", "www.instagram.com"];

    const isValidProtocol = validProtocols.includes(protocol);
    const isInstagramDomain =
      validDomains.includes(hostname) || hostname.endsWith(".instagram.com");

    return isValidProtocol && isInstagramDomain;
  } catch {
    return false;
  }
};
