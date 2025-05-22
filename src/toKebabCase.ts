export const toKebabCase = (str: string) => {
  try {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  } catch (error) {
    console.error("Error toKebabCase", error);
  }
};
