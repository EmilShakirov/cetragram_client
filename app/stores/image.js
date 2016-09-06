import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import ImageActions from 'actions/image';
import ApplicationActions from 'actions/application';

@createStore(Alt)
export default class ImageStore {
  static displayName = 'ImageStore'

  defaultProps = {
    caption: ''
  }

  constructor() {
    this.reset();

    this.bindListeners({
      setCaption: ImageActions.SET_CAPTION,
      setFile: ImageActions.SET_FILE
    });
  }

  setCaption(caption) {
    this.image.caption = caption;
  }

  setFile(file) {
    this.image.file = file;
  }

  reset() {
    this.image = Object.assign({}, this.defaultProps);
  }
}
