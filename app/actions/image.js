import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import imagesSource from 'sources/images';

@createActions(Alt)
export default class ImageActions {
  getImage(imageId) {
    return (dispatch) => {
      imagesSource.getImage(imageId).then(result => dispatch(result.image));
    };
  }

  setCaption(caption) {
    return caption;
  }

  setFile(file) {
    return file;
  }
}
