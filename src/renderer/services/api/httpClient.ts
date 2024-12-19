import axios, { AxiosInstance, AxiosResponse } from 'axios';
import APIErrorResponse from './APIErrorResponse';

class HttpClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.example.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError,
    );
  }

  private handleSuccess(response: AxiosResponse) {
    return response;
  }

  private handleError(error: any) {
    // Handle error appropriately
    return Promise.reject(new APIErrorResponse(error, 500));
  }

  public async get<T>(config: { path: string }): Promise<T> {
    const response = await this.instance.get<T>(config.path);
    return response.data;
  }

  // Add other methods like post, put, delete if needed
}

const httpClient = new HttpClient();
export default httpClient;
