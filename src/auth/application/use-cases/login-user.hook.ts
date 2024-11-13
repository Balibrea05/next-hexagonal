import { useState } from 'react';
import AuthService from '@/auth/infraestructure/auth.service';
import { useInjection } from '@/shared/application/functions/use-injection.function';
import { UseLoginUserHookResponse } from '@/auth/domain/interfaces/hooks/login-user.interface';
import { useRouter } from 'next/navigation';
import { AuthInterface } from '@/auth/domain/interfaces/output/auth.interface';
import { ApiErrorInterface } from '@/shared/domain/interfaces/api-error.interface';

export const useLoginUserHook = (): UseLoginUserHookResponse => {
  const authService = useInjection(AuthService);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const login = async () => {
    setIsLoading(true);

    const response: AuthInterface | ApiErrorInterface = await authService.login(
      {
        email,
        password,
      }
    );

    setIsLoading(false);

    if (response.statusCode && response.statusCode !== 200) {
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
