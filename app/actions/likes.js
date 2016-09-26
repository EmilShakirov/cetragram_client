import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import likesSource from 'sources/likes';

@createActions(Alt)
export default class LikesActions {
  create(imageId) {
    return (dispatch) => {
      likesSource.create(imageId).then(result => dispatch(result));
    };
  }

  destroy(likeId) {
    return (dispatch) => {
      likesSource.destroy(likeId).then(result => dispatch(result));
    };
  }

  get(likes) {
    return likes;
  }
}
