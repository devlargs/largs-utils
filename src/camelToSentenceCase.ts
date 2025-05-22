export const camelToSentenceCase = (str: string): string | undefined => {
  try {
    const temp = str.replace(/([A-Z])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g, "$& ");
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  } catch (error) {
    console.error("Error converting camel case to sentence case", error);
  }
};
