import axios, { AxiosInstance } from 'axios';

export default class AxiosConfig {
  private readonly baseUrl: string =
    process.env.API_BASE_URL || 'https://api.example.com';

  private _headers = {};

  constructor() {}

  public createAxiosInstance(): AxiosInstance {
    this._headers = {
      accept: 'application/json',
    };

    return axios.create({
      baseURL: this.baseUrl,
      headers: this._headers,
    });
  }
}
