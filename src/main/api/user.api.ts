import axios from 'axios';
import { BaseApi } from './base.api';
import type { IUserDetails } from './types/data.types';

export class UserApi extends BaseApi {
  private oneUserEndpoint: string = `/Account/v1/User/${this.userId}`;

  async getOneUser(): Promise<IUserDetails> {
    const tokenResponse = await this.generateToken();
    const response = await axios.get(`${this.baseUrl}${this.oneUserEndpoint}`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}
