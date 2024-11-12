import LoginLogoComponent from '@/auth/ui/components/login-logo/login-logo.component';
import { JSX } from 'react';
import LoginFormComponent from '@/auth/ui/components/login-form/login-form.component';

const LoginComponent: JSX.Element = () => {
  return (
    <div className={'d-flex w-100 h-100'}>
      <LoginLogoComponent />
      <LoginFormComponent />
    </div>
  );
};

export default LoginComponent;
