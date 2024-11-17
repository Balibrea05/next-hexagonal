import { ProductModel } from '@/products/domain/entities/product.model';

export interface IProductService {
  getOne(id: string): ProductModel;
  getAll(): ProductModel[];
}
