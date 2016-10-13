import config from 'config';
import { request } from 'lib/request';
import { checkStatus, parseJSON } from 'lib/response';
import { OAuth } from 'oauthio-web';

OAuth.initialize(process.env.OAUTHIO_KEY);

export default class OauthSource {
  static urlRoot = `${config.apiPath}/oauth_users`;

  static auth(provider) {
    return (
      OAuth
      .popup(provider)
      .fail(err => console.log(err))
    );
  }

  static createUserFromOauth(authData, provider) {
    const params = {
      oauth_user: {
        oauth_data: Object.assign({}, authData, { provider })
      }
    };

    return request(`${config.apiPath}/oauth_users`, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON);
  }
}
