import React, {PropTypes} from 'react';
import {
  Col,
  Thumbnail
} from 'react-bootstrap';

export default class ImageItem extends React.Component {
  render() {
    const { caption, link } = this.props.image;

    return (
      <Col
        lg={ 3 }
        md={ 4 }
        xs= { 6 }
        className="thumb"
      >
        <a className="thumbnail" href="#">
          <Thumbnail src={ link }>
            <p>{ caption }</p>
          </Thumbnail>
        </a>
      </Col>
    );
  }
}
