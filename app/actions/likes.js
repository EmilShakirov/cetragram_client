import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import likesSource from 'sources/likes';

@createActions(Alt)
export default class LikesActions {
  create(imageId) {
    return (dispatch) => {
      this.setLikeProcessing(imageId);
      likesSource.create(imageId).then(result => dispatch(result.like));
    };
  }

  destroy(like) {
    return (dispatch) => {
      this.setLikeProcessing(like.imageId);
      likesSource.destroy(like.id).then(result => dispatch(result.like));
    };
  }

  setLikeProcessing(imageId) {
    return imageId;
  }
}
