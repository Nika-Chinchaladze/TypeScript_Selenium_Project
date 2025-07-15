import axios, { AxiosResponse } from 'axios';
import { BaseApi } from './base.api';
import type { IUserDetails } from './types/data.types';

export class UserApi extends BaseApi {
  private oneUserEndpoint: string = `/Account/v1/User/${this.userId}`;
  private authorizedEndpoint: string = '/Account/v1/Authorized';

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

  async postUserAuthorized(): Promise<AxiosResponse> {
    const response = await axios.post(
      `${this.baseUrl}${this.authorizedEndpoint}`,
      this.getCredentials(),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  }
}
