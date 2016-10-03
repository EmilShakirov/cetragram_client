import config from 'config';
import requestAuth from 'lib/request-auth';
import requestFileUpload from 'lib/request-file-upload';
import responseNormalizer from 'lib/response-normalizer';

export default class ImagesSource {
  static urlRoot = `${config.apiPath}/images`;

  static create(image) {
    const { file, caption } = image;
    const fileData = new FormData();

    fileData.append('image[caption]', caption);
    fileData.append('image[file]', file);

    return requestFileUpload(this.urlRoot, {
      headers: {},
      method: 'POST',
      body: fileData
    })
    .then(result => result.json());
  }

  static get(page) {
    return requestAuth(this.urlRoot, {
      method: 'GET'
    }, { page })
    .then(result =>
      result.json().then(json => {
        const response = responseNormalizer(json.images, 'images');
        response.pagination = json.meta.pagination;
        return response;
      })
    );
  }
}
