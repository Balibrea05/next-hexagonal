import { useState } from 'react';
import { EmailValidationInterface } from '@/auth/domain/interfaces/hooks/email-validation.interface';

export const useEmailValidationHook = (): EmailValidationInterface => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const ensureEmailIsValid = (email: string) => {
    let valid = false;

    if (emailPattern.test(email)) {
      valid = true;
    }

    setIsValidEmail(valid);
  };

  return {
    isValidEmail,
    ensureEmailIsValid,
  };
};
