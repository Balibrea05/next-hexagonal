export interface LengthValidationInterface {
  isValidLength: boolean;
  ensureHaveLength: (value: string) => void;
}
