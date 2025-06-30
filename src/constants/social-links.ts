type SocialLink = "facebook" | "instagram" | "spotify" | "twitter" | "youtube";
type SocialLinkConfig = {
  validDomains: string[];
  endsWith: string;
};

export const SOCIAL_LINKS: Record<SocialLink, SocialLinkConfig> = {
  facebook: {
    validDomains: [
      "facebook.com",
      "www.facebook.com",
      "m.facebook.com",
      "web.facebook.com",
      "fb.com",
      "www.fb.com",
    ],
    endsWith: ".facebook.com",
  },
  instagram: {
    validDomains: ["instagram.com", "www.instagram.com", "m.instagram.com"],
    endsWith: ".instagram.com",
  },
  spotify: {
    validDomains: ["spotify.com", "www.spotify.com", "open.spotify.com"],
    endsWith: ".spotify.com",
  },
  twitter: {
    validDomains: ["twitter.com", "www.twitter.com", "m.twitter.com"],
    endsWith: ".twitter.com",
  },
  youtube: {
    validDomains: [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtu.be",
      "www.youtu.be",
    ],
    endsWith: ".youtube.com",
  },
};
