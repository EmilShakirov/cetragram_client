import config from 'config';
import { request } from 'lib/request';
import { checkStatus, parseJSON } from 'lib/response';

export default class SessionSource {
  static urlRoot = `${config.apiPath}/users/sign_in`;

  static create(user) {
    const { email, password } = user;
    const params = { email, password };

    return request(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON);
  }

  static delete(user) {
    console.log('signed out', user);
  }
}
