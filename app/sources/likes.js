import config from 'config';
import requestAuth from 'lib/request-auth';
import { camelizeKeys } from 'humps';

export default class LikesSource {
  static urlRoot = `${config.apiPath}/likes`;

  static create(imageId) {
    const likeParams = JSON.stringify(
      {
        like: { image_id: imageId }
      }
    );

    return requestAuth(this.urlRoot, {
      method: 'POST',
      body: likeParams
    })
    .then(result => result.json());
  }

  static destroy(likeId) {
    return requestAuth(`${this.urlRoot}/${likeId}`, {
      method: 'DELETE'
    })
    .then(result => result.json());
  }
}
