import MenuComponent from '@/shared/ui/components/menu/menu.component';
import { FC, ReactNode } from 'react';

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuComponent></MenuComponent>
      {children}
    </>
  );
};

export default AuthLayout;
