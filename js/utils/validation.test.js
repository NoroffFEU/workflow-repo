import { expect, describe, it } from "vitest";
import { validateEmail, validateForm, validatePassword } from "./validation";

const validNoroffEmail = "student@stud.noroff.no";
const validPassword = "validPassword123!";

const invalidEmail = "invalid-email";
const errorEmailMessage = "Please enter a valid Noroff email address";
const errorPasswordMessage = "Password must be at least 8 characters";
const invalidPassword = "short";

describe("validateEmail", () => {
  // Test 1: Make sure student emails work
  it("returns true for valid student Noroff email", () => {
    const result = validateEmail(validNoroffEmail);
    expect(result).toBe(true);
  });

  // Test 2: Make sure staff emails work
  it("returns true for valid Noroff staff email", () => {
    const email = "teacher@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  // Test 3: Make sure other email domains are rejected
  it("returns false for non-Noroff email", () => {
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });

  // Test 4: Make sure invalid email formats are rejected
  it("returns false for invalid email format", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe("validatePassword", () => {
  // Test 1: Make sure passwords with 8 or more characters are valid
  it("returns true for password with 8 or more characters", () => {
    const result = validatePassword(validPassword);
    expect(result).toBe(true);
  });

  it("returns true for password longer than 8 characters", () => {
    const password = "superlongpassword";
    const result = validatePassword(password);
    expect(result).toBe(true);
  });

  it("returns true for password with special characters", () => {
    const password = "P%@ssword1";
    const result = validatePassword(password);
    expect(result).toBe(true);
  });

  it("returns false for password with less than 8 characters", () => {
    const password = "short";
    const result = validatePassword(password);
    expect(result).toBe(false);
  });
});

describe("validatePassword With a forEach loop same as above", () => {
  const testCases = [
    { password: "short", expected: false },
    { password: "exactly8", expected: true },
    { password: "longerpassword", expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`Returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});

describe("validateForm function", () => {
  it("returns isValid true and no errors for valid email and password", () => {
    const email = validNoroffEmail;
    const password = validPassword;
    const result = validateForm(email, password);
    expect(result).toEqual({
      isValid: true,
      errors: {},
    });
  });

  it("returns isValid false and email error for invalid email", () => {
    const email = invalidEmail;
    const password = validPassword;
    const result = validateForm(email, password);
    expect(result).toEqual({
      isValid: false,
      errors: {
        email: "Please enter a valid Noroff email address",
      },
    });
  });

  it("returns isValid false and password error for invalid password", () => {
    const email = validNoroffEmail;
    const password = invalidPassword;
    const result = validateForm(email, password);
    expect(result).toEqual({
      isValid: false,
      errors: {
        password: errorPasswordMessage,
      },
    });
  });

  it("returns isValid false and both errors for invalid email and password", () => {
    const email = invalidEmail;
    const password = invalidPassword;
    const result = validateForm(email, password);
    expect(result).toEqual({
      isValid: false,
      errors: {
        email: errorEmailMessage,
        password: errorPasswordMessage,
      },
    });
  });
});

//  A more efficient way to test validateForm with multiple scenarios

describe("validateForm", () => {
  // We're testing three different situations:
  const testCases = [
    {
      // Situation 1: Everything is correct
      email: validNoroffEmail,
      password: validPassword,
      expected: { isValid: true, errors: {} },
    },
    {
      // Situation 2: Everything is wrong
      email: invalidEmail,
      password: invalidPassword,
      expected: {
        isValid: false,
        errors: {
          email: errorEmailMessage,
          password: errorPasswordMessage,
        },
      },
    },
    {
      // Situation 3: Email is good but password is too short
      email: validNoroffEmail,
      password: invalidPassword,
      expected: {
        isValid: false,
        errors: {
          password: errorPasswordMessage,
        },
      },
    },
  ];

  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
