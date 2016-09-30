import config from 'config';
import { request } from 'lib/request';
import { checkStatus, parseJSON } from 'lib/response';

export default class SignupSource {
  static urlRoot = `${config.apiPath}/users`;

  static create(user) {
    return request(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      console.log('request failed', error.response);
    });
  }
}
