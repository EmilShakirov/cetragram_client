import React, { Component, PropTypes } from 'react';
import {
  Col,
  Image,
  Panel,
  Row,
  Thumbnail
} from 'react-bootstrap';
import { Link } from 'react-router';
import { paths } from 'helpers/routes';
import Like from 'components/like';
import styles from './styles';

export default class ImageItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.id,
      caption: PropTypes.string,
      link: PropTypes.string
    })
  }

  render() {
    const { caption, link, id: imageId } = this.props.image;

    return (
      <Col
        lg={ 3 }
        md={ 4 }
        xs= { 6 }
        className="thumb"
      >
        <Thumbnail className="clearfix">
          <Link to={ paths.image(imageId) }>
            <Image
              src={ link }
              className={ styles.image }
              rounded
            />
          </Link>
          <br/>
          <p className={ styles.caption }>{ caption }</p>
          <Col xs={ 3 } className={ `pull-right ${styles.like}` }>
            <Like imageId={ imageId }/>
          </Col>
        </Thumbnail>
      </Col>
    );
  }
}
