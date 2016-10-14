import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Button,
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import { isEmpty } from 'lodash';
import ImageList from './list';
import imagePropTypes from 'prop_types/image';
import ImagesActions from 'actions/images';
import ImagesStore from 'stores/images';

@connectToStores
export default class ImageLayout extends Component {
  static propTypes = {
    images: PropTypes.objectOf(PropTypes.shape(imagePropTypes)),
    isModalOpen: PropTypes.bool,
    orderedIds: PropTypes.arrayOf(PropTypes.number),
    page: PropTypes.number,
    total: PropTypes.number
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
    ImagesActions.get.defer();
  }

  isEdgeReached = () => {
    const { orderedIds, total } = this.props;

    return total == orderedIds.length;
  }

  handleUploadMore = () => {
    ImagesActions.get.defer(this.props.page + 1);
  }

  renderList = (complete) => {
    const { images, orderedIds } = this.props;

    return (
      <ImageList
        images={ images }
        orderedIds={ orderedIds }
      />
    );
  }

  renderMoreButton = () => {
    return (
      <Button
        bsSize="large"
        bsStyle="success"
        onClick={ this.handleUploadMore }
      >
        Load more
      </Button>
    );
  }

  render() {
    const { isModalOpen, images } = this.props;
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
        <Row>
          <Col md={ 2 } mdOffset={ 6 }>
            { this.isEdgeReached() || isEmpty(images) ? null : this.renderMoreButton() }
          </Col>
        </Row>
      </Grid>
    );
  }
}
