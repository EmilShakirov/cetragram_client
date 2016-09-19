import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './styles';

export default class DropzoneSpot extends React.Component {
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
          <div>Drop file here.</div>
        </Dropzone>
      </div>
    );
  }
}
