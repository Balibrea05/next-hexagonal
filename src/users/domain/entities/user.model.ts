import { BaseModel } from '@/shared/domain/entities/base.model';

export class UserModel extends BaseModel {
  email: string;
  password: string;
}
