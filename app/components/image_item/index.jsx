import React, { PropTypes } from 'react';
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

export default class ImageItem extends React.Component {
  static propTypes = {
    image: React.PropTypes.shape({
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
        <Panel className={ styles.imagePanel }>
          <Link to={ paths.image(imageId) }>
            <Image src={ link } thumbnail/>
          </Link>
            <Col xs={ 12 }>
              <div className="pull-right">
                <Like imageId={ imageId }/>
              </div>
            </Col>
          <Col xs={ 12 }>{ caption }</Col>
        </Panel>
      </Col>
    );
  }
}
