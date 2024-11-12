import React, { useEffect, useState } from 'react';
import AuthService from '@/auth/infraestructure/auth.service';

export const useLoginUser = () => {
  const authService = new AuthService();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await authService.login({
      email,
      password,
    });

    console.log(response);

    setIsLoading(false);
  };
  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return {
    isLoading,
    visibility,
    login,
    setEmail,
    setPassword,
    changeVisibility,
  };
};
