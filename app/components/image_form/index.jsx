import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  Thumbnail,
  Well
} from 'react-bootstrap';
import classnames from 'classnames';
import DropzoneSpot from 'components/dropzone_spot';
import ImageActions from 'actions/image';
import imagePropTypes from 'prop_types/image';
import ImagesActions from 'actions/images';
import ImageStore from 'stores/image';

@connectToStores
export default class ImageForm extends Component {
  static propTypes = {
    image: PropTypes.shape(imagePropTypes),
    isUploading: PropTypes.bool
  }

  static getStores(props) {
    return [ImageStore];
  }

  static getPropsFromStores(props) {
    return {
      ...ImageStore.getState()
    };
  }

  handleFileDrop = (files) => {
    ImageActions.setFile(files[0]);
  }

  createImage = (event) => {
    event.preventDefault();

    ImagesActions.create(this.props.image);
  }

  isUploadingDisabled = () => {
    const { isUploading, image } = this.props;

    return isUploading || !image.file;
  }

  renderDropzone = () => {
    const { file } = this.props.image;

    if (file) {
      return <Thumbnail src={ file.preview }/>;
    } else {
      return <DropzoneSpot onDrop={ this.handleFileDrop }/>;
    }
  }

  uploadButtonText = () => {
    const { isUploading, image } = this.props;
    let text;

    switch (true) {
      case (!image.file):
        text = 'Please upload image';

        break;
      case (isUploading):
        text = 'Your image is being uploaded...';

        break;
      default:
        text = 'Upload!';

        break;
    }

    return text;
  }

  setCaption = (event) => {
    ImageActions.setCaption(event.target.value);
  }

  render() {
    return (
      <Col xs={ 6 } xsOffset={ 3 } >
        <Well>
          { this.renderDropzone() }

          <form onSubmit={
            this.isUploadingDisabled()
            ? (event) => event.preventDefault()
            : this.createImage }>
            <FormGroup controlId="caption">
              <FormControl
                componentClass="textarea"
                placeholder="Enter your caption"
                onChange={ this.setCaption }
              />
            </FormGroup>
            <Button
              bsSize="large"
              bsStyle="primary"
              className={ classnames({ disabled: this.isUploadingDisabled() }) }
              type="submit"
            >
              { this.uploadButtonText() }
            </Button>
          </form>
        </Well>
      </Col>
    );
  }
}
