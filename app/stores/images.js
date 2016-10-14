import Alt from 'alt_flux';
import config from 'config';
import { createStore } from 'alt-utils/lib/decorators';
import selectn from 'selectn';
import ImagesActions from 'actions/images';
import LikesActions from 'actions/likes';
import { reject, uniq } from 'lodash';

@createStore(Alt)
export default class ImagesStore {
  static displayName = 'ImagesStore'

  constructor() {
    this.images = {};
    this.orderedIds = [];
    this.page = 1;
    this.total = NaN;

    this.bindListeners({
      create: ImagesActions.CREATE,
      get: ImagesActions.GET,
      giveLike: LikesActions.CREATE,
      unlike: LikesActions.DESTROY,
      setLikeProcessing: LikesActions.SET_LIKE_PROCESSING,
      unsetLikeProcessing: [LikesActions.CREATE, LikesActions.DESTROY]
    });
  }

  create(image) {
    this.images[image.id] = image;
    this.orderedIds.unshift(image.id);
    this.total += 1;
  }

  get(response) {
    const { result: orderedIds, pagination: { page, total } } = response;

    this.images = Object.assign({}, this.images, selectn("entities.images", response));
    this.orderedIds.push(...orderedIds);
    this.orderedIds = uniq(this.orderedIds);
    this.page = page;
    this.total = total;
  }

  giveLike(like) {
    const { image_id: imageId } = like;

    this.images[imageId].likes.push(...[like]);
  }

  setLikeProcessing(imageId) {
    this.images[imageId].likeProcessing = true;
  }

  unsetLikeProcessing(like) {
    const { image_id: imageId } = like;

    this.images[imageId].likeProcessing = false;
  }

  unlike(like) {
    const { image_id: imageId } = like;
    const likes = this.images[imageId].likes;

    this.images[imageId].likes = reject(likes, { id: like.id });
  }
}
