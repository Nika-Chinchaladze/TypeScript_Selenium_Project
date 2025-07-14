import axios from 'axios';
import type { IGeneratedToken } from './types/data.types';

export class BaseApi {
  protected baseUrl: string = 'https://demoqa.com';
  protected userName: string = 'chincho';
  protected password: string = 'Chincho123@';
  protected userId: string = 'b1703b5f-b163-4949-bc61-b29928f8cd86';

  protected async generateToken(): Promise<IGeneratedToken> {
    const credentials: string = `{
      "userName": "${this.userName}",
      "password": "${this.password}"
    }`;
    const response = await axios.post(`${this.baseUrl}/Account/v1/GenerateToken`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}
