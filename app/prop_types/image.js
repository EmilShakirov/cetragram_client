import { PropTypes } from 'react';
import likePropTypes from './like';

export const imagePropTypes = {
  caption: PropTypes.string,
  id: PropTypes.id,
  link: PropTypes.string,
  user_id: PropTypes.id,
  likes: PropTypes.arrayOf(PropTypes.shape(likePropTypes))
};
