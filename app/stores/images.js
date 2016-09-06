import Alt from 'alt_flux';
import config from 'config';
import { createStore } from 'alt-utils/lib/decorators';
import ImagesActions from 'actions/images';

@createStore(Alt)
export default class ImagesStore {
  static displayName = 'ImagesStore'

  constructor() {
    this.images = [];

    this.bindListeners({
      create: ImagesActions.CREATE,
      get: ImagesActions.GET
    });
  }

  create(image) {
    console.log(image);
  }

  get(images) {
    this.images = images;
  }
}
