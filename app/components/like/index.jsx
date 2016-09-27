import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Badge, Glyphicon } from 'react-bootstrap';
import session from 'services/session';
import classNames from 'classnames';
import LikesActions from 'actions/likes';
import LikesStore from 'stores/likes';

@connectToStores
export default class Like extends Component {
  static propTypes = {
    imageId: PropTypes.number,
    likes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.id,
        image_id: PropTypes.id,
        userId: PropTypes.id
      })
    )
  }

  static getStores(props) {
    return [LikesStore];
  }

  static getPropsFromStores(props) {
    return {
      ...LikesStore.getState()
    };
  }

  handleClick = () => {
    const { imageId } = this.props;
    const like = this.targetLike();

    if (like) {
      LikesActions.destroy(like.id);
    } else {
      LikesActions.create(imageId);
    }
  }

  targetLike = () => {
    const { imageId, likes } = this.props;
    const { id: userId } = session.currentUser().user;

    return _.find(likes, { image_id: imageId, user_id: userId });
  }

  likeClass = () => {
    return classNames({ 'text-danger': this.targetLike() });
  }

  render() {
    const { imageId, likes } = this.props;

    return (
      <Badge onClick={ this.handleClick }>
        <Glyphicon
          className={ this.likeClass() }
          glyph="heart"
        />
        &nbsp;
        { likes.filter(like => like.image_id == imageId).length }
      </Badge>
    );
  }
}
