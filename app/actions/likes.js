import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import likesSource from 'sources/likes';

@createActions(Alt)
export default class LikesActions {
  create(imageId) {
    return (dispatch) => {
      this.setLikeProcessing();
      likesSource.create(imageId).then(result => dispatch(result.like));
    };
  }

  destroy(likeId) {
    return (dispatch) => {
      this.setLikeProcessing();
      likesSource.destroy(likeId).then(result => dispatch(result.like));
    };
  }

  setLikeProcessing() {
    return true;
  }
}
