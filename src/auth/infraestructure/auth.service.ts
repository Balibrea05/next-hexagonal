import AxiosConfig from '@/shared/infraestructure/axios.config';
import { AxiosInstance, AxiosPromise } from 'axios';
import { LoginInterface } from '@/auth/domain/interfaces/login.interface';
import { AuthInterface } from '@/auth/domain/interfaces/auth.interface';

export default class AuthService {
  private _token: string;
  private _httpClient: AxiosInstance;

  constructor(axiosConfig: AxiosConfig) {
    this._httpClient = axiosConfig.createAxiosInstance();
  }

  async login(body: LoginInterface): AxiosPromise<AuthInterface> {
    try {
      const response = await this._httpClient.post('/auth/login', body);

      this.token = response.data.token;

      return response;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  get token(): string {
    return this._token;
  }

  set token(token: string): void {
    this._token = token;
  }
}
