import { shuffleArray } from "../shuffleArray";

describe("shuffleArray", () => {
  test("should return an array with the same elements but in different order", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...array]);

    expect(shuffledArray).toHaveLength(array.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));
    expect(array).toEqual(expect.arrayContaining(shuffledArray!));

    const isOrderDifferent = array.some(
      (value, index) => value !== shuffledArray?.[index]
    );
    expect(isOrderDifferent).toBe(true);
  });

  test("should handle an empty array", () => {
    const emptyArray: number[] = [];
    const shuffledArray = shuffleArray(emptyArray);
    expect(shuffledArray).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const singleElementArray = [1];
    const shuffledArray = shuffleArray(singleElementArray);
    expect(shuffledArray).toEqual([1]);
  });
});
