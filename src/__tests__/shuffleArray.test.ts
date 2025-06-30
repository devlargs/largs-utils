import { shuffleArray } from "../shuffleArray";

describe("shuffleArray", () => {
  test("should shuffle array elements", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...originalArray]);

    expect(shuffledArray).toHaveLength(5);
    expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));
  });

  test("should handle empty array", () => {
    const result = shuffleArray([]);
    expect(result).toEqual([]);
  });

  test("should handle single element array", () => {
    const result = shuffleArray([42]);
    expect(result).toEqual([42]);
  });

  test("should handle error cases gracefully", () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Test with null/undefined to trigger error handling
    expect(shuffleArray(null as any)).toBeUndefined();
    expect(shuffleArray(undefined as any)).toBeUndefined();

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
