import React, {PropTypes} from 'react';
import {
  Row
} from 'react-bootstrap';
import ImageItem from './image_item';

export default class ImageList extends React.Component {
  renderItems = () => {
    return this.props.images.map(image => <ImageItem key={ image.id } image={ image }/>);
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
