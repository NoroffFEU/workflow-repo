import { describe, expect, it } from "vitest";
import { greet, reverseString, capitalizeFirstLetter } from "./greet";

describe("Sample test suite", () => {
  const testCases = [
    { name: "Alice", expected: "Hello, Alice!" },
    { name: "Bob", expected: "Hello, Bob!" },
    { name: "", expected: "Hello, !" },
  ];

  testCases.forEach(({ name, expected }) => {
    it(`Greets ${name} correctly`, () => {
      const result = greet(name);
      expect(result).toBe(expected);
      expect(result).toContain(name);
    });
  });

  // Additional tests can be added here
  it("Result contains a Name", () => {
    const result = greet("Alice");
    expect(result).toContain("Alice");
  });

  it("Result does not match a wrong message", () => {
    const result = greet("Bob");
    expect(result).not.toBe("Hello, Alice!");
  });
});

describe("reverseString function", () => {
  const testCases = [
    { input: "hello", expected: "olleh" },
    { input: "world", expected: "dlrow" },
    { input: "", expected: "" },
    { input: "A", expected: "A" },
    { input: "a v", expected: "v a" },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`Reverses "${input}" correctly`, () => {
      const result = reverseString(input);
      expect(result).toBe(expected);
    });
  });
});

describe("capitalizeFirstLetter function", () => {
  const testCases = [
    { input: "hello", expected: "Hello" },
    { input: "World", expected: "World" },
    { input: "", expected: "" },
    { input: "a", expected: "A" },
    { input: "A", expected: "A" },
    { input: " abc", expected: " abc" },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`Capitalizes "${input}" correctly`, () => {
      const result = capitalizeFirstLetter(input);
      expect(result).toBe(expected);
    });
  });
});
