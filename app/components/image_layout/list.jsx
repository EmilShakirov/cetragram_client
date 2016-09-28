import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import ImageItem from 'components/image_item';
import imagePropTypes from 'prop_types/image';
import { values } from 'lodash';

export default class ImageList extends Component {
  static propTypes = {
    images: PropTypes.objectOf(PropTypes.shape(imagePropTypes))
  }

  renderItems = () => {
    const images = values(this.props.images);

    return images.map(
      (image) => <ImageItem key={ image.id } image={ image }/>
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
