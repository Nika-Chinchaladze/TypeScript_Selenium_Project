import axios, { AxiosResponse } from 'axios';
import { BaseApi } from './base.api';
import { ValueHolder } from './utils/value.holder';
import type { IUserDetails } from './types/data.types';

export class UserApi extends BaseApi {
  // User Info
  public userName: string = 'chincho';
  public password: string = 'Chincho123@';
  protected userId: string = 'b1703b5f-b163-4949-bc61-b29928f8cd86';

  // Endpoints
  private oneUserEndpoint: string = `/Account/v1/User/${this.userId}`;
  private authorizedEndpoint: string = '/Account/v1/Authorized';
  private createNewUser: string = '/Account/v1/User';

  getString(symbol: string, length: number): string {
    return symbol.repeat(length);
  }

  generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  async getOneUser(): Promise<IUserDetails> {
    const tokenResponse = await this.generateToken({
      username: this.userName,
      password: this.password,
    });
    const response = await axios.get(`${this.baseUrl}${this.oneUserEndpoint}`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  async postUserAuthorized(args: { username: string; password: string }): Promise<AxiosResponse> {
    const credentials: string = `{
      "userName": "${args.username}",
      "password": "${args.password}"
    }`;
    const response = await axios.post(`${this.baseUrl}${this.authorizedEndpoint}`, credentials, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  // ==================== Requests that don't have influence on existing flow ==================== //
  async postNewUser(args: { valueHolder: ValueHolder<{ userName: string; password: string }> }) {
    const userRandomName: string = this.generateRandomString(10);
    const userRandomPassword: string = 'PeackyBlinders123@';

    const credentials = {
      userName: userRandomName,
      password: userRandomPassword,
    };
    args.valueHolder.setValue(credentials);

    const requestBody: string = JSON.stringify(credentials);
    const response = await axios.post(`${(this, this.baseUrl)}${this.createNewUser}`, requestBody, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log('✅ New user has been created!');
    console.log('🛠️ POST: ', response.data);
    return {
      statusCode: response.status,
      userId: response.data.userID,
    };
  }

  async getCreatedUser(args: {
    userId: string;
    valueHolder: ValueHolder<{ userName: string; password: string }>;
  }): Promise<IUserDetails> {
    const tokenResponse = await this.generateToken({
      username: args.valueHolder.getValua().userName,
      password: args.valueHolder.getValua().password,
    });
    const response = await axios.get(`${this.baseUrl}/Account/v1/User/${args.userId}`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('✅ New user has been retrieved!');
    console.log('🛠️ GET: ', response.data);
    return response.data;
  }

  async deleteNewUser(args: {
    userId: string;
    valueHolder: ValueHolder<{ userName: string; password: string }>;
  }) {
    const tokenResponse = await this.generateToken({
      username: args.valueHolder.getValua().userName,
      password: args.valueHolder.getValua().password,
    });

    const response = await axios.delete(`${this.baseUrl}/Account/v1/User/${args.userId}`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('✅  New user has been Deleted!');
    return response;
  }
}
