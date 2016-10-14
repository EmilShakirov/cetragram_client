import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import { chain } from 'lodash';
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

    return (
      chain(orderedIds)
        .map(id => images[id])
        .uniqBy('id')
        .value()
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
