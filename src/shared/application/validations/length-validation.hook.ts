import { useState } from 'react';
import { LengthValidationInterface } from '@/shared/domain/interfaces/validations/length-validation.interface';

export const useLengthValidationHook: LengthValidationInterface = (
  length: number = 3
) => {
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
