import { AxiosInstance, AxiosResponse } from 'axios';
import AxiosConfig from '@/shared/infraestructure/axios.config';
import { injectable } from 'tsyringe';
import { IApiService } from '@/shared/domain/interfaces/implementations/api.interface';
import { HandleError } from '@/shared/infraestructure/handle.error';

@injectable()
export default class ApiService implements IApiService {
  #httpClient: AxiosInstance;
  #handleError: HandleError;
  constructor(
    private readonly axiosConfig: AxiosConfig,
    private readonly handleError: HandleError
  ) {
    this.#httpClient = axiosConfig.createAxiosInstance(true);
    this.#handleError = handleError;
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this._httpClient.get(endpoint);
      return response.data;
    } catch (error) {
      return this.handleError.handle(error);
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this._httpClient.post(
        endpoint,
        data
      );
      return response.data;
    } catch (error) {
      return this.handleError.handle(error);
    }
  }

  async patch<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this._httpClient.patch(
        endpoint,
        data
      );
      return response.data;
    } catch (error) {
      return this.handleError.handle(error);
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> =
        await this._httpClient.delete(endpoint);
      return response.data;
    } catch (error) {
      return this.handleError.handle(error);
    }
  }
}
