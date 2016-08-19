import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import ImageActions from 'actions/image';

export default class DropzoneSpot extends React.Component {
  onDrop(files) {
    ImageActions.create(files[0]);
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={ ::this.onDrop }>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}
