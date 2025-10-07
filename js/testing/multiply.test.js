import { describe, expect, it } from "vitest";
import { multiply } from "./multiply";

describe("Multiply function", () => {
  // Test cases will be added here
  const testCases = [
    { a: 2, b: 3, expected: 6 },
    { a: -2, b: 3, expected: -6 },
    { a: 0, b: 5, expected: 0 },
    { a: -4, b: -5, expected: 20 },
    { a: 2.5, b: 4, expected: 10 },
  ];

  testCases.forEach(({ a, b, expected }) => {
    it(`returns ${expected} for ${a} * ${b}`, () => {
      const result = multiply(a, b);
      expect(result).toBe(expected);
    });
  });
});
