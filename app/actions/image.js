import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import config from 'config';
import imageSource from 'sources/image';

@createActions(Alt)
export default class ImageActions {
  create(file) {
    return (dispatch) => {
      imageSource.create(file).then(result => {
        dispatch(result);
      });
    };
  }
}
