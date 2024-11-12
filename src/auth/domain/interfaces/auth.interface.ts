import { AuthUserModel } from '@/auth/domain/entities/auth-user.model';

export interface AuthInterface {
  user: AuthUserModel;
  token: string;
}
