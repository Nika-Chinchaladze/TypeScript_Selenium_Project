import { UserApi } from '../../../main/api/user.api';
import { expect } from 'chai';

const userApi: UserApi = new UserApi();

describe('API Test Suite', () => {
  it('Retrieve User Data - GET:Request', async () => {
    const response = await userApi.getOneUser();
    expect(response.username).equal('chincho');
    expect(response.books[0].title).equals('Git Pocket Guide');
    expect(response.books[0].pages).greaterThan(200);
  });
});
