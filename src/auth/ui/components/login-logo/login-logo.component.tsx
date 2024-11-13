import Image from 'next/image';
import { FC } from 'react';

const LoginLogoComponent: FC = () => {
  return (
    <div
      className={
        'd-flex justify-content-center align-items-center w-100 bg-white'
      }
    >
      <Image
        src={
          'https://img.freepik.com/vector-premium/logotipo-tienda-ropa-hombres-tienda-ropa-sobre-fondo-transparente-vector-logotipo-tienda-ropa_148524-756.jpg'
        }
        alt={'Logo image'}
        width={400}
        height={300}
      ></Image>
    </div>
  );
};

export default LoginLogoComponent;
