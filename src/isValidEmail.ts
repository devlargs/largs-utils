export const isValidEmail = (email: string): boolean | undefined => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  } catch (error) {
    console.error("Error isValidEmail", error);
  }
};
