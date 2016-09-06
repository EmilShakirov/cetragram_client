import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import imagesSource from 'sources/images';

@createActions(Alt)
export default class ImagesActions {
  get(images) {
    return (dispatch) => {
      if (!images.length) {
        imagesSource.get().then(result => dispatch(result));
      }
      else {
        dispatch(images);
      }
    };
  }

  create(image) {
    return (dispatch) => {
      imagesSource.create(image).then(result => {
        dispatch(result);
      });
    };
  }
}
