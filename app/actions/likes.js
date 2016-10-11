import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import likesSource from 'sources/likes';

@createActions(Alt)
export default class LikesActions {
  constructor() {
    this.generateActions('setLikeProcessing');
  }

  create(imageId) {
    return (dispatch) => {
      this.setLikeProcessing(imageId);

      setTimeout(() => {
        likesSource.create(imageId).then(result => dispatch(result.like));
      }, 500);
    };
  }

  destroy(like) {
    return (dispatch) => {
      this.setLikeProcessing(like.imageId);

      setTimeout(() => {
        likesSource.destroy(like.id).then(result => dispatch(result.like));
      }, 500);
    };
  }
}
