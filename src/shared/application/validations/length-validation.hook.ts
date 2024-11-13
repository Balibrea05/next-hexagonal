import { useState } from 'react';
import { LengthValidationInterface } from '@/shared/domain/interfaces/validations/length-validation.interface';

export const useLengthValidationHook = (
  length: number = 3
): LengthValidationInterface => {
  const [isValidLength, setIsValidLength] = useState<boolean>(false);

  const ensureHaveLength = (value: string) => {
    let valid = false;

    if (value.length > length) {
      valid = true;
    }

    setIsValidLength(valid);
  };

  return {
    isValidLength,
    ensureHaveLength,
  };
};
