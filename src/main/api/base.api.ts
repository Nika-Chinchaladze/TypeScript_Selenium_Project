import axios from 'axios';
import type { IGeneratedToken } from './types/data.types';

export class BaseApi {
  protected baseUrl: string = 'https://demoqa.com';

  protected async generateToken(args: {
    username: string;
    password: string;
  }): Promise<IGeneratedToken> {
    const credentials: string = `{
      "userName": "${args.username}",
      "password": "${args.password}"
    }`;
    const response = await axios.post(`${this.baseUrl}/Account/v1/GenerateToken`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
