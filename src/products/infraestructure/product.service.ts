import { injectable } from 'tsyringe';
import { IProductService } from '@/products/domain/interfaces/implementations/product-service.interface';
import { ProductModel } from '@/products/domain/entities/product.model';
import ApiService from '@/shared/infraestructure/api.service';

@injectable()
export class ProductService implements IProductService {
  #apiService!: ApiService;
  constructor(private readonly apiService: ApiService) {
    this.#apiService = apiService;
  }
  async getOne(id: string): ProductModel {
    return await this.#apiService.get('products', id);
  }

  async getAll(): ProductModel[] {
    return await this.#apiService.get('products');
  }
}
