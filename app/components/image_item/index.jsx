import React, { Component, PropTypes } from 'react';
import {
  Col,
  Image,
  Panel,
  Thumbnail
} from 'react-bootstrap';
import { Link } from 'react-router';
import { camelizeKeys } from 'humps';
import { paths } from 'helpers/routes';
import Like from 'components/like';
import imagePropTypes from 'prop_types/image';
import styles from './styles';

export default class ImageItem extends Component {
  static propTypes = {
    image: PropTypes.shape(imagePropTypes),
    likeProcessing: PropTypes.bool
  }

  render() {
    const { image: { caption, link, likes, likeProcessing, id: imageId } } = this.props;

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
          <Col
            className={ `pull-right ${styles.like}` }
            xs={ 3 }
          >
            <Like
              imageId={ imageId }
              likeProcessing={ likeProcessing }
              likes={ camelizeKeys(likes) }
            />
          </Col>
        </Thumbnail>
      </Col>
    );
  }
}
