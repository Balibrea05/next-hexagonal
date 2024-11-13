import AxiosConfig from '@/shared/infraestructure/axios.config';
import { AxiosInstance, AxiosResponse } from 'axios';
import { LoginInterface } from '@/auth/domain/interfaces/input/login.interface';
import { injectable } from 'tsyringe';
import { HandleError } from '@/shared/infraestructure/handle.error';
import { AuthInterface } from '@/auth/domain/interfaces/output/auth.interface';
import { ApiErrorInterface } from '@/shared/domain/interfaces/api-error.interface';

@injectable()
export default class AuthService {
  #token!: string;
  #httpClient!: AxiosInstance;
  #handleError!: HandleError;

  constructor(
    private readonly axiosConfig: AxiosConfig,
    private readonly handleError: HandleError
  ) {
    this.#httpClient = axiosConfig.createAxiosInstance();
    this.#handleError = handleError;
  }

  async login(
    body: LoginInterface
  ): Promise<AuthInterface | ApiErrorInterface> {
    try {
      const response: AxiosResponse<AuthInterface> =
        await this.#httpClient.post('/auth/login', body);

      this.token = response.data.token;

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
