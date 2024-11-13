import { injectable } from 'tsyringe';
import axios from 'axios';
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

  handle<T>(error: unknown): T {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const message =
        statusCode && this.#statusMapping[statusCode]
          ? this.#statusMapping[statusCode]
          : 'Unknown error occurred';

      return { message, status: statusCode } as T;
    }
    return { message: 'Api error' } as T;
  }
}
