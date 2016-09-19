import React, { PropTypes } from 'react';
import {
  Col,
  Thumbnail
} from 'react-bootstrap';
import { Link } from 'react-router';
import { paths } from 'helpers/routes';
import Image from 'components/image';

export default class ImageThumb extends React.Component {
  static propTypes = {
    image: React.PropTypes.shape({
      id: PropTypes.id,
      caption: PropTypes.string,
      link: PropTypes.string
    })
  }

  render() {
    const { id: imageId } = this.props.image;

    return (
      <Col
        lg={ 3 }
        md={ 4 }
        xs= { 6 }
        className="thumb"
      >
        <Link to={ paths.image(imageId) }>
          <Image image={ this.props.image }/>
        </Link>
      </Col>
    );
  }
}
