export enum PasswordErrors {
  EMPTY = "Password is empty",
  SHORT = "Password is too short",
  NO_UPPER_CASE = "Upper case letter required",
  NO_LOWER_CASE = "Lower case letter required",
  NO_NUMBER = "Number required",
}

export interface CheckResult {
  valid: boolean;
  reasons: string[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.checkForEmpty(password, reasons);
    this.checkForLenght(password, reasons);
    this.checkForLowerCase(password, reasons);
    this.checkForUpperCase(password, reasons);
    return {
      valid: reasons.length > 0 ? false : true,
      reasons: reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);
    this.checkForNumber(password, basicCheck.reasons);
    return {
      valid: basicCheck.reasons.length > 0 ? false : true,
      reasons: basicCheck.reasons,
    };
  }

  private checkForNumber(password: string, reasons: string[]) {
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkForEmpty(password: string, reasons: PasswordErrors[]) {
    if (!password) {
      reasons.push(PasswordErrors.EMPTY);
    }
  }

  private checkForLenght(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }
}
