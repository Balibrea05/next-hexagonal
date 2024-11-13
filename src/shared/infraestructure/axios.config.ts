import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export default class AxiosConfig {
  private readonly baseUrl: string =
    process.env.API_BASE_URL || 'https://api.devegames.com/api';

  #headers: AxiosHeaders = new AxiosHeaders({
    accept: 'application/json',
  });

  constructor() {}

  public createAxiosInstance(headers?: AxiosHeaders): AxiosInstance {
    if (headers) {
      this.#headers = headers;
    }

    return axios.create({
      baseURL: this.baseUrl,
      headers: this.#headers,
    });
  }
}
