import Alt from 'alt_flux';
import config from 'config';
import { createStore } from 'alt-utils/lib/decorators';
import LikesActions from 'actions/likes';

@createStore(Alt)
export default class LikesStore {
  static displayName = 'LikesStore'

  constructor() {
    this.likes = [];

    this.bindListeners({
      create: LikesActions.CREATE,
      get: LikesActions.GET,
      destroy: LikesActions.DESTROY
    });
  }

  create(like) {
    this.likes.push(like);
  }

  get(likes) {
    this.likes = likes;
  }

  destroy(like) {
    this.likes.splice(this.likes.findIndex(item => item === like.id), 1);
  }
}
