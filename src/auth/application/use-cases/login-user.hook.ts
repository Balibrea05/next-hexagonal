import { useState } from 'react';
import AuthService from '@/auth/infraestructure/auth.service';
import { useInjection } from '@/shared/application/functions/use-injection.function';
import { UseLoginUserHookResponse } from '@/auth/domain/interfaces/hooks/login-user.interface';
import { useRouter } from 'next/navigation';

export const useLoginUserHook: UseLoginUserHookResponse = () => {
  const authService = useInjection(AuthService);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const login = async () => {
    setIsLoading(true);

    const response = await authService.login({
      email,
      password,
    });

    setIsLoading(false);

    if (response.status !== 200) {
      setError(true);
      return;
    }

    router.push('/home');
  };
  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return {
    isLoading,
    visibility,
    email,
    login,
    setEmail,
    setPassword,
    changeVisibility,
    error,
  };
};
