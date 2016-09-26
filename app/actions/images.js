import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { browserHistory } from 'react-router';
import imagesSource from 'sources/images';
import likesActions from 'actions/likes';

const IMAGES_PATH = "/images";

@createActions(Alt)
export default class ImagesActions {
  get(images) {
    return (dispatch) => {
      if (!images.length) {
        imagesSource.get().then((result) => {
          dispatch(result.images);
          likesActions.get(this._imagesLikes(result.images));
        });
      } else {
        dispatch(images);
      }
    };
  }

  create(image) {
    return (dispatch) => {
      imagesSource.create(image).then(result => {
        dispatch(result);

        browserHistory.push(IMAGES_PATH);
      });
    };
  }

  // TODO: This should moved or refactored
  _imagesLikes(images) {
    return _
      .chain(images)
      .map(image => image.likes)
      .flatten()
      .value();
  }
}
