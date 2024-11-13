export interface EmailValidationInterface {
  isValidEmail: boolean;
  ensureEmailIsValid: (email: string) => void;
}
