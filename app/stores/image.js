import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import ImageActions from 'actions/image';
import ImagesActions from 'actions/images';

@createStore(Alt)
export default class ImageStore {
  static displayName = 'ImageStore'

  defaultProps = {
    caption: ''
  }

  constructor() {
    this.reset();
    this.isUploading = false;

    this.bindListeners({
      setCaption: ImageActions.SET_CAPTION,
      setFile: ImageActions.SET_FILE,
      reset: ImagesActions.CREATE,
      setIsUploading: ImagesActions.SET_IS_UPLOADING
    });
  }

  setCaption(caption) {
    this.image.caption = caption;
  }

  setFile(file) {
    this.image.file = file;
  }

  setIsUploading() {
    this.isUploading = true;
  }

  reset() {
    this.image = Object.assign({}, this.defaultProps);
    this.isUploading = false;
  }
}
