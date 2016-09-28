import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import ImageList from './list';
import imagePropTypes from 'prop_types/image';
import ImagesActions from 'actions/images';
import ImagesStore from 'stores/images';

@connectToStores
export default class ImageLayout extends Component {
  static propTypes = {
    images: PropTypes.objectOf(PropTypes.shape(imagePropTypes)),
    isModalOpen: PropTypes.bool
  }

  static getStores(props) {
    return [ImagesStore];
  }

  static getPropsFromStores(props) {
    return {
      ...ImagesStore.getState()
    };
  }

  componentDidMount() {
    ImagesActions.get.defer(this.props.images);
  }

  renderList = (complete) => {
    return (
      <ImageList images={ this.props.images } />
    );
  }

  render() {
    const { isModalOpen } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={ 12 } className="text-center">
            <h2>Images</h2>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={ 6 }>
            { this.renderList() }
          </Col>
        </Row>
      </Grid>
    );
  }
}
