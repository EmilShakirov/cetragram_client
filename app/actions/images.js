import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { browserHistory } from 'react-router';
import imagesSource from 'sources/images';
import { paths } from 'helpers/routes';

@createActions(Alt)
export default class ImagesActions {
  get(images) {
    return (dispatch) => {
      if (!images.length) {
        imagesSource.get().then(result => dispatch(result));
      } else {
        dispatch(images);
      }
    };
  }

  create(image) {
    return (dispatch) => {
      this.setIsUploading();

      imagesSource.create(image).then(result => {
        dispatch(result.image);

        browserHistory.push(paths.images());
      });
    };
  }

  setIsUploading() {
    return true;
  }
}
