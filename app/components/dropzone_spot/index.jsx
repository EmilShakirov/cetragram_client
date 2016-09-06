import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import ImagesActions from 'actions/images';
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
          className={ styles.dropzone }
          onDrop={ this.handleFileDrop }
        >
          <div>DROP!</div>
        </Dropzone>
      </div>
    );
  }
}
