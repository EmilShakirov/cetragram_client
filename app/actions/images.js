import Alt from 'alt_flux';
import { browserHistory } from 'react-router';
import { createActions } from 'alt-utils/lib/decorators';
import { paths } from 'helpers/routes';
import imagesSource from 'sources/images';

@createActions(Alt)
export default class ImagesActions {
  constructor() {
    this.generateActions('setIsUploading');
  }

  get(page = 1) {
    return (dispatch) => {
      imagesSource.get(page).then(result => dispatch(result));
    };
  }

  create(image) {
    return (dispatch) => {
      this.setIsUploading();
      imagesSource.create(image)
      .then(result => {
        dispatch(result.image);
        browserHistory.push(paths.images());
      });
    };
  }
}
