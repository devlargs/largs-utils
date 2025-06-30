export const isFacebookUrl = (facebookUrl: string): boolean => {
  try {
    const trimmed = facebookUrl.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = [
      "facebook.com",
      "www.facebook.com",
      "m.facebook.com",
      "web.facebook.com",
      "fb.com",
      "www.fb.com",
    ];

    const isValidProtocol = validProtocols.includes(protocol);
    const isFacebookDomain =
      validDomains.includes(hostname) || hostname.endsWith(".facebook.com");

    return isValidProtocol && isFacebookDomain;
  } catch {
    return false;
  }
};
