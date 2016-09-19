import React, {PropTypes} from 'react';
import {
  Row
} from 'react-bootstrap';
import ImageThumb from './image_thumb';

export default class ImageList extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.id,
        caption: PropTypes.string,
        file: PropTypes.object
      })
    )
  }

  renderItems = () => {
    return this.props.images.map(
      (image) => <ImageThumb key={ image.id } image={ image }/>
    );
  }

  render() {
    return (
      <div className="container">
        <Row>
          { this.renderItems() }
        </Row>
      </div>
    );
  }
}
