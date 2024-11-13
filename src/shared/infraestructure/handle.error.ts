import { injectable } from 'tsyringe';
import axios, { AxiosError } from 'axios';
import { ApiErrorInterface } from '@/shared/domain/interfaces/api-error.interface';
import { IError } from '@/shared/domain/interfaces/implementations/error.interface';

@injectable()
export class HandleError implements IError {
  #statusMapping: { [key: number]: string } = {
    400: 'Error',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    500: 'Internal server error',
  };

  handle(error: AxiosError): ApiErrorInterface {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const message =
        statusCode && this.#statusMapping[statusCode]
          ? this.#statusMapping[statusCode]
          : 'Unknown error occurred';

      return { message, status: statusCode };
    }
    return { message: 'Api error' };
  }
}
