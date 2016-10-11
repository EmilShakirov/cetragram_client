import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Col,
  Modal,
  Thumbnail
} from 'react-bootstrap';
import { paths } from 'helpers/routes';
import { browserHistory } from 'react-router';
import { camelizeKeys } from 'humps';
import ApplicationActions from 'actions/application';
import ApplicationStore from 'stores/application';
import imagePropTypes from 'prop_types/image';
import ImagesStore from 'stores/images';
import Like from 'components/like';

@connectToStores
export default class ImageModal extends Component {
  static propTypes = {
    image: PropTypes.shape(imagePropTypes),
    images: PropTypes.objectOf(PropTypes.shape(imagePropTypes)),
    isModalOpen: PropTypes.bool,
    likeProcessing: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.id
    })
  }

  static getStores(props) {
    return [ImagesStore, ApplicationStore];
  }

  static getPropsFromStores(props) {
    return {
      ...ImagesStore.getState(),
      ...ApplicationStore.getState()
    };
  }

  handleModalClose = () => {
    ApplicationActions.closeModal({
      callback: () => browserHistory.push(paths.images())
    });
  }

  render() {
    const { isModalOpen, images, params: { imageId } } = this.props;

    if (!images[imageId]) { return <div/>; }

    const { caption, link, likes, likeProcessing } = images[imageId];

    return (
      <Modal
        show={ isModalOpen }
        onHide={ this.handleModalClose }
      >
          <Modal.Body className="clearfix">
            <Thumbnail src={ link }/>
            <Col
              className="pull-right"
              xs={ 3 }
            >
              <Like
                imageId={ +imageId }
                likeProcessing={ likeProcessing }
                likes={ camelizeKeys(likes) }
              />
            </Col>
            <p className="text-center">{ caption }</p>
          </Modal.Body>
      </Modal>
    );
  }
}
