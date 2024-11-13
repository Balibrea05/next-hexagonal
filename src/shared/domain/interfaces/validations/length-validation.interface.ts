export interface LengthValidationInterface {
  isValid: boolean;
  ensureHaveLength: (value: string) => void;
}
