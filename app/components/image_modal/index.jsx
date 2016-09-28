import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Modal,
  Thumbnail
} from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import ApplicationStore from 'stores/application';
import ImageActions from 'actions/image';
import imagePropTypes from 'prop_types/image';
import ImagesStore from 'stores/images';
import ImageStore from 'stores/image';

@connectToStores
export default class ImageModal extends Component {
  static propTypes = {
    image: PropTypes.shape(imagePropTypes),
    images: PropTypes.arrayOf(PropTypes.shape(imagePropTypes)),
    isModalOpen: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.id
    })
  }

  static getStores(props) {
    return [ImageStore, ImagesStore, ApplicationStore];
  }

  static getPropsFromStores(props) {
    return {
      ...ImageStore.getState(),
      ...ImagesStore.getState(),
      ...ApplicationStore.getState()
    };
  }

  componentDidMount() {
    const { params: { imageId } } = this.props;

    ImageActions.getImage.defer(imageId);
  }

  foundImage = () => {
    const { images, params: { imageId } } = this.props;

    let image;

    if (images.length) {
      image = images.find(image => image.id === +imageId );
    } else {
      image = this.props.image;
    }

    return image;
  }

  render() {
    const { isModalOpen } = this.props;
    const { caption, link } = this.foundImage();

    return (
      <Modal
        show={ isModalOpen }
        onHide={ ApplicationActions.closeModal }
      >
          <Modal.Body>
            <Thumbnail src={ link }/>

            <p className="text-center">{ caption }</p>
          </Modal.Body>
      </Modal>
    );
  }
}
