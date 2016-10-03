import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import { map } from 'lodash';
import ImageItem from 'components/image_item';
import imagePropTypes from 'prop_types/image';

export default class ImageList extends Component {
  static propTypes = {
    images: PropTypes.objectOf(PropTypes.shape(imagePropTypes)),
    orderedIds: PropTypes.arrayOf(PropTypes.number)
  }

  renderItems = () => {
    return this.sortedImages().map(
      (image) => <ImageItem key={ image.id } image={ image }/>
    );
  }

  sortedImages = () => {
    const { images, orderedIds } = this.props;

    return map(orderedIds, (id) => {
      return images[id];
    });
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
