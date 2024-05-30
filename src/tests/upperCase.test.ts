// uppercase.test.ts
import { StringUtils, getStringInfo, upperCase } from "../app/upperCase";

// Test suite
describe("Unit Test Upper Case", () => {
  // StringUtils section
  describe("StringUtils tests", () => {
    // Variables
    let sut: StringUtils;

    // Hooks
    beforeAll(() => {
      console.log("Before all");
    });

    afterAll(() => {
      console.log("After all");
    });

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Before each");
    });

    afterEach(() => {
      // ckearing mocks
      console.log("After each");
    });

    // Test cases for Upper Case
    it.only("should return correct upper case", () => {
      const actual = sut.upperCase("hello");
      expect(actual).toBe("HELLO");
      console.log("Actual test 1");
    });

    it("should return correct lower case", () => {
      const sut = new StringUtils();
      const actual = sut.lowerCase("HELLO");
      expect(actual).toBe("hello");
      console.log("Actual test 2");
    });

    it("should throw an error for invalid input - function", () => {
      function expectError() {
        const actual = sut.upperCase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid word argument input!");
      expect(expectError).toThrow("Invalid word argument input!");
    });

    it("should throw an error for invalid input - arrow function", () => {
      expect(() => {
        sut.upperCase("");
      }).toThrow("Invalid word argument input!");
    });

    it.skip("should throw an error for invalid input - try catch block", () => {
      try {
        sut.upperCase("");
        fail('GetStringInfo should have thrown an error for invalid input!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid word argument input!");
      }
    });

    it.todo('To write scenario in the future');

  }); // End of StringUtils section

  describe("Section  1", () => {
    // test cases out of a section
    it("should return true when upper case for a input valid string", () => {
      const result = upperCase("hello");
      expect(result).toBe("HELLO");
    });

    it("should return true when upper case for a input valid string", () => {
      // Arrange
      const sut = upperCase;
      const expected = "WORLD";

      // Act
      const actual = sut("world");

      // Assert
      expect(actual).toBe(expected);
    });
  });
  // Test cases for Upper Case section
  describe("To Upper Case examples", () => {
    it.each([
      { input: "hello", expected: "HELLO" },
      { input: "world", expected: "WORLD" },
      { input: "foo", expected: "FOO" },
      { input: "bar", expected: "BAR" },
      { input: "baz", expected: "BAZ" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = upperCase(input);
      expect(actual).toBe(expected);
    });

    it("should return true when upper case for a input valid string", () => {
      // Arrange
      const sut = upperCase;
      const expected = "WORLD";

      // Act
      const actual = sut("world");

      // Assert
      expect(actual).toBe(expected);
    });
  }); // End of Upper Case section

  describe("Section  1", () => {
    // Test cases out of section
    it("should return true when upper case for a input valid string", () => {
      const actual = getStringInfo("Hello");

      expect(actual.upperCase).toBe("HELLO");
      expect(actual.lowerCase).toBe("hello");
      expect(actual.characters).toEqual(["H", "e", "l", "l", "o"]);
    });
  });
  // Test cases for getStringInfo section
  describe("getStringInfo for Hello should", () => {
    it("return the correct lower case string", () => {
      const actual = getStringInfo("Hello");
      expect(actual.lowerCase).toBe("hello");
    });

    it("return the correct upper case string", () => {
      const actual = getStringInfo("Hello");
      expect(actual.upperCase).toBe("HELLO");
    });

    it("return the correct characters array", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters).toEqual(["H", "e", "l", "l", "o"]);
    });

    it("contain the character 'H' in the characters array", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters).toContain("H");
      expect(actual.characters).toContain<string>("H");
    });

    it("contain the characters 'e', 'H', 'l', and 'o' in the characters array", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters).toEqual(["H", "e", "l", "l", "o"]);
      expect(actual.characters).toEqual(
        expect.arrayContaining(["e", "H", "l", "o"])
      );
    });

    it("return the correct length of the string", () => {
      const actual = getStringInfo("Hello");
      expect(actual.length).toBe(5);
      expect(actual).toHaveLength(5);
    });

    it("have a characters array with a length of 5", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters.length).toBe(5);
    });

    it("have an empty extraInfo object", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).toEqual({});
    });

    it("have an extraInfo object that is an instance of Object", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).toBeInstanceOf(Object);
    });

    it("have a defined extraInfo object", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
    });

    it("not have a null extraInfo object", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).not.toBeNull();
    });

    it("have a truthy extraInfo object", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).toBeTruthy();
    });
  }); // End of getStringInfo section
}); // End of Unit Test Upper Case
