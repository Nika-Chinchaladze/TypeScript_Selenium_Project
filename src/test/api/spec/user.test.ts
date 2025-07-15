import { UserApi } from '../../../main/api/user.api';
import { expect } from 'chai';

const userApi: UserApi = new UserApi();

describe('API Test Suite', () => {
  it('Check User is Authorized - POST:Request', async () => {
    const response = await userApi.postUserAuthorized();
    expect(response.status).equal(200);
    expect(response.data).equal(true);
  });

  it('Retrieve User Data - GET:Request', async () => {
    const response = await userApi.getOneUser();
    expect(response.username).equal('chincho');
    expect(response.books[0].title).equals('Git Pocket Guide');
    expect(response.books[0].pages).greaterThan(200);
  });
});
