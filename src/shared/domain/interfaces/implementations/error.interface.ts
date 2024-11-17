import { AxiosError } from 'axios';
import { ApiErrorInterface } from '@/shared/domain/interfaces/output/api-error.interface';

export interface IError {
  handle(error: AxiosError): ApiErrorInterface;
}
