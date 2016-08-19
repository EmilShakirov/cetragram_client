import config from 'config';
import { requestFileUpload } from 'lib/request-file-upload';

export default class ImageSource {
  static urlRoot = `${config.apiPath}/images`

  static create(file) {
    const fileData = new FormData();

    fileData.append('image[file]', file);

    return requestFileUpload(this.urlRoot, {
      headers: {},
      method: 'POST',
      body: fileData
    })
    .then(result => result.json());
  }
}
