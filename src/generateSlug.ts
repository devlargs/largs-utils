export const generateSlug = (str: string): string | undefined => {
  try {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  } catch (error) {
    console.error("Error generating slug", error);
  }
};
