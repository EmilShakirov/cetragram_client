import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './styles';

export default class DropzoneSpot extends Component {
  static propTypes = {
    onDrop: PropTypes.func
  }

  static defaultProps = {
    onDrop() {}
  }

  handleFileDrop = (files) => {
    this.props.onDrop(files);
  }

  render() {
    return (
      <div>
        <Dropzone
          accept="image/*"
          className={ styles.dropzone }
          onDrop={ this.handleFileDrop }
        >
          <div className={ styles.dropzoneText }>
            Drop file or click here to browse.
          </div>
        </Dropzone>
      </div>
    );
  }
}
