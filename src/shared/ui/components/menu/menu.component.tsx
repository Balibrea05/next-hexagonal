'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './menu.module.scss';

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className={'d-flex align-items-center p-2'}>
      <div>
        <Image
          src={
            'https://img.freepik.com/vector-premium/logotipo-tienda-ropa-hombres-tienda-ropa-sobre-fondo-transparente-vector-logotipo-tienda-ropa_148524-756.jpg'
          }
          alt={'Logo image'}
          width={70}
          height={70}
          className={'rounded-circle'}
        ></Image>
      </div>
      <ul className={'d-flex justify-content-around align-items-center w-25'}>
        <li>
          <button
            className={`${styles.button} ${pathname.includes('home') && 'text-decoration-underline'}`}
            onClick={() => {
              router.push('/products');
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`${styles.button} ${pathname.includes('products') && 'text-decoration-underline'}`}
            onClick={() => {
              router.push('/products');
            }}
          >
            Products
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Page;
