import { AxiosError } from 'axios';
import { ApiErrorInterface } from '@/shared/domain/interfaces/api-error.interface';

export interface IError {
  handle(error: AxiosError): ApiErrorInterface;
}
