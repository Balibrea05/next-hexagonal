import { FC } from 'react';
import Image from 'next/image';
import { ProductModel } from '@/products/domain/entities/product.model';
import styles from './product-card.module.scss';

const ProductCard: FC<ProductModel> = (product: ProductModel) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={
            'https://lsco.scene7.com/is/image/lsco/345840011-dynamic1-pdp-lse?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1840'
          }
          alt={'product image'}
        ></Image>
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
