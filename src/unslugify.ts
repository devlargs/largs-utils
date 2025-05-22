export const unslugify = (slug: string): string | undefined => {
  try {
    return slug
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
  } catch (error) {
    console.error("Error unslugify", error);
  }
};
