import { BaseModel } from '@/shared/domain/entities/base.model';

export class ProductModel extends BaseModel {
  title!: string;
  description!: string;
  price!: number;
  categoryId!: string;
  fileId?: string;
  userId!: string;
}
