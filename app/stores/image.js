import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import ImageActions from 'actions/image';
import config from 'config';

@createStore(Alt)
export default class ImageStore {
  static displayName = 'ImageStore'

  constructor() {
    this.bindListeners({
      create: ImageActions.CREATE
    });
  }

  create(image) {
    console.log(image);
  }
}
