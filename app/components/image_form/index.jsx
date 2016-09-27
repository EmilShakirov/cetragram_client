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
import DropzoneSpot from 'components/dropzone_spot';
import ImageActions from 'actions/image';
import ImagesActions from 'actions/images';
import ImageStore from 'stores/image';

@connectToStores
export default class ImageForm extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.id,
      caption: PropTypes.string,
      file: PropTypes.object
    })
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

  renderDropzone = () => {
    const { file } = this.props.image;

    if (file) {
      return <Thumbnail src={ file.preview }/>;
    } else {
      return <DropzoneSpot onDrop={ this.handleFileDrop }/>;
    }
  }

  setCaption = (event) => {
    ImageActions.setCaption(event.target.value);
  }

  render() {
    return (
        <Col xs={ 6 } xsOffset={ 3 } >
          <Well>
            { this.renderDropzone() }

            <form onSubmit={ this.createImage }>
              <FormGroup
                controlId="caption"
              >
                <FormControl
                  componentClass="textarea"
                  placeholder="Enter your caption"
                  onChange={ this.setCaption }
                />
              </FormGroup>
              <Button
                bsSize="large"
                bsStyle="primary"
                type="submit"
              >
                Upload
              </Button>
            </form>
          </Well>
        </Col>

  );
  }
}
