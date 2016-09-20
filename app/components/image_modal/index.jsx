import React, { PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Modal,
  Button,
  Thumbnail
} from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import ApplicationStore from 'stores/application';
import ImageActions from 'actions/image';
import ImagesStore from 'stores/images';
import ImageStore from 'stores/image';

@connectToStores
export default class ImageModal extends React.Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.id,
      caption: PropTypes.string,
      link: PropTypes.string
    }),
    isModalOpen: PropTypes.bool
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
        bsSize="large"
        show={ isModalOpen }
        onHide={ ApplicationActions.closeModal }
      >
          <Modal.Body>
            <Thumbnail src={ link }/>

            <p className="text-center">{ caption }</p>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    );
  }
}
