import AxiosConfig from '@/shared/infraestructure/axios.config';
import { AxiosInstance, AxiosPromise } from 'axios';
import { LoginInterface } from '@/auth/domain/interfaces/input/login.interface';
import { AuthInterface } from '@/auth/domain/interfaces/output/auth.interface';
import { injectable } from 'tsyringe';
import { HandleError } from '@/shared/infraestructure/handle.error';

@injectable()
export default class AuthService {
  #token: string;
  #httpClient: AxiosInstance;
  #handleError: HandleError;

  constructor(
    private readonly axiosConfig: AxiosConfig,
    private readonly handleError: HandleError
  ) {
    this.#httpClient = axiosConfig.createAxiosInstance();
    this.#handleError = handleError;
  }

  async login(body: LoginInterface): AxiosPromise<AuthInterface> {
    try {
      const response = await this.#httpClient.post('/auth/login', body);

      this.token = response.data.token;

      return response;
    } catch (e) {
      return this.#handleError.handle(e);
    }
  }

  get token(): string {
    return this.#token;
  }

  set token(token: string): void {
    this.#token = token;
  }
}
