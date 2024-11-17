import { AxiosResponse } from 'axios';
import { LoginInterface } from '@/auth/domain/interfaces/input/login.interface';
import { injectable } from 'tsyringe';
import { HandleError } from '@/shared/infraestructure/handle.error';
import { AuthInterface } from '@/auth/domain/interfaces/output/auth.interface';
import { ApiErrorInterface } from '@/shared/domain/interfaces/output/api-error.interface';
import { MockClient } from '@/shared/infraestructure/mock.client';

@injectable()
export default class AuthService {
  #token!: string;
  #httpClient!: MockClient;
  #handleError!: HandleError;

  constructor(
    private readonly mockClient: MockClient,
    private readonly handleError: HandleError
  ) {
    this.#httpClient = mockClient;
    this.#handleError = handleError;
  }

  async login(
    body: LoginInterface
  ): Promise<AuthInterface | ApiErrorInterface> {
    try {
      const response: AxiosResponse<AuthInterface> =
        await this.#httpClient.post('/auth/login', body);

      return response.data;
    } catch (e) {
      return this.#handleError.handle(e);
    }
  }

  get token(): string {
    return this.#token;
  }

  set token(token: string) {
    this.#token = token;
  }
}
