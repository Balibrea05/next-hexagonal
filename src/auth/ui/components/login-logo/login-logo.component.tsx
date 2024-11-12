import Image from 'next/image';
import { JSX } from 'react';

const LoginLogoComponent: JSX.Element = () => {
  return (
    <div
      className={
        'd-flex justify-content-center align-items-center w-100 bg-light-subtle'
      }
    >
      <Image
        src={
          'https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol-thumbnail.png'
        }
        alt={'Logo image'}
        width={200}
        height={200}
      ></Image>
    </div>
  );
};

export default LoginLogoComponent;
