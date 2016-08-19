import config from 'config';
import { request } from 'lib/request';

export default class SessionSource {
  static urlRoot = `${config.apiPath}/users/sign_in`

  static create(user) {
    return request(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(result => result.json());
  }

  static delete(user) {
    console.log('signed out', user);
  }
}
