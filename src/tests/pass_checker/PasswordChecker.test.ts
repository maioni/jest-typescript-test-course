import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";
import { PasswordErrors } from "../../app/pass_checker/PasswordChecker";

// Invalid password:
// - less than 8 characters
// - contains the word 'password'
// - has no upper case letter
// - has no number
// - has no special character
// - has no lower case letter

describe("PasswordChecker", () => {
  let passwordChecker: PasswordChecker;

  beforeEach(() => {
    passwordChecker = new PasswordChecker();
  });

  describe("checkPassword for 'password' should", () => {
 
    it("Password throw an error when empty'", () => {
        const actual = passwordChecker.checkPassword('');
        expect(actual.reasons).toContain(PasswordErrors.EMPTY);
    });

    it('Password with less than 8 characters is invalid', () => {
        const actual = passwordChecker.checkPassword('1234567');
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('Password with 8 or more characters is valid', () => {
        const actual = passwordChecker.checkPassword('12345678');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no upper case is invalid', () => {
        const actual = passwordChecker.checkPassword('abcd');
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with upper case is valid', () => {
        const actual = passwordChecker.checkPassword('abcdE');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with no lower case is invalid', () => {
        const actual = passwordChecker.checkPassword('ABCD');
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Password with lower case is valid', () => {
        const actual = passwordChecker.checkPassword('ABCDe');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Complex Password is valid', () => {
        const actual = passwordChecker.checkPassword('1234abcdE');
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true);
    });

    it('Admin Password with no  number is invalid', () => {
        const actual = passwordChecker.checkAdminPassword('abcdABCD');
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    });

    it('Admin Password with number is valid', () => {
        const actual = passwordChecker.checkAdminPassword('1234ABCDe');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    });

  });
});
