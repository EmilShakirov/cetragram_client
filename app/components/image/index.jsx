import React, { PropTypes } from 'react';
import {
  Thumbnail
} from 'react-bootstrap';

export default class Image extends React.Component {
  static propTypes = {
    image: React.PropTypes.shape({
      id: PropTypes.id,
      caption: PropTypes.string,
      link: PropTypes.string
    })
  }

  render() {
    const { caption, link } = this.props.image;

    return (
      <div>
        <Thumbnail src={ link }>
          <p>{ caption }</p>
        </Thumbnail>
      </div>
    );
  }
}
