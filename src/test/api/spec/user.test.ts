import { UserApi } from '../../../main/api/user.api';
import { ValueHolder } from '../../../main/api/utils/value.holder';
import { expect } from 'chai';

const userApi: UserApi = new UserApi();

describe('API Test Suite', () => {
  it('Check User is Authorized - POST:Request', async () => {
    const response = await userApi.postUserAuthorized({
      username: userApi.userName,
      password: userApi.password,
    });
    expect(response.status).equal(200);
    expect(response.data).equal(true);
  });

  it('Retrieve User Data - GET:Request', async () => {
    const response = await userApi.getOneUser();
    expect(response.username).equal('chincho');
    expect(response.books[0].title).equals('Git Pocket Guide');
    expect(response.books[0].pages).greaterThan(200);
  });

  it.only('Create & Delete new User - POST:Request', async () => {
    // Create User
    const valueHolderObject = new ValueHolder<{ userName: string; password: string }>();
    const creationResponse = await userApi.postNewUser({ valueHolder: valueHolderObject });
    expect(creationResponse.statusCode).equal(201);

    // Get User
    await userApi.sleep(3000);
    const userResponse = await userApi.getCreatedUser({
      userId: creationResponse.userId,
      valueHolder: valueHolderObject,
    });
    expect(userResponse.username).equal(valueHolderObject.getValua().userName);

    // Delete User
    await userApi.sleep(3000);
    const deletionResponse = await userApi.deleteNewUser({
      userId: creationResponse.userId,
      valueHolder: valueHolderObject,
    });
    expect(deletionResponse.status).equal(204);

    // Get User
  });
});
