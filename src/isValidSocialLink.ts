import { SOCIAL_LINKS } from "./constants/social-links";

export const isValidSocialLink = (
  link: string,
  socialLink: keyof typeof SOCIAL_LINKS
): boolean => {
  try {
    const trimmed = link.trim();
    const url = new URL(trimmed);
    const hostname = url.hostname.toLowerCase();
    const protocol = url.protocol;

    const validProtocols = ["http:", "https:"];
    const validDomains = SOCIAL_LINKS[socialLink].validDomains;

    const isValidProtocol = validProtocols.includes(protocol);
    const isSocialLinkDomain =
      validDomains.includes(hostname) ||
      hostname.endsWith(SOCIAL_LINKS[socialLink].endsWith);

    return isValidProtocol && isSocialLinkDomain;
  } catch {
    return false;
  }
};
