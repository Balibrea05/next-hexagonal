import { AxiosInstance, AxiosResponse } from 'axios';
import AxiosConfig from '@/shared/infraestructure/axios.config';

export default class ApiService {
  _httpClient: AxiosInstance;
  constructor(private readonly axiosConfig: AxiosConfig) {
    this._httpClient = axiosConfig.createAxiosInstance(true);
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this._httpClient.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
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
      console.error('POST request failed:', error);
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
      console.error('PATCH request failed:', error);
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> =
        await this._httpClient.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('DELETE request failed:', error);
    }
  }
}
