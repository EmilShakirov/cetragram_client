import Alt from 'alt_flux';
import config from 'config';
import { createStore } from 'alt-utils/lib/decorators';
import selectn from 'selectn';
import ImagesActions from 'actions/images';
import LikesActions from 'actions/likes';
import { reject } from 'lodash';

@createStore(Alt)
export default class ImagesStore {
  static displayName = 'ImagesStore'

  constructor() {
    this.images = {};
    this.orderedIds = [];

    this.bindListeners({
      create: ImagesActions.CREATE,
      get: ImagesActions.GET,
      giveLike: LikesActions.CREATE,
      unlike: LikesActions.DESTROY
    });
  }

  create(image) {
    this.images[image.id] = image;
  }

  get(response) {
    const { result: orderedIds } = response;
    const images = selectn("entities.images", response);

    this.images = images;
    this.orderedIds = orderedIds;
  }

  giveLike(like) {
    const { image_id: imageId } = like;

    this.images[imageId].likes.push(...[like]);
  }

  unlike(like) {
    const { image_id: imageId } = like;
    const likes = this.images[imageId].likes;

    this.images[imageId].likes = reject(likes, { id: like.id });
  }
}
