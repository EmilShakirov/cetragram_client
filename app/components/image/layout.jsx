import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import ImagesActions from 'actions/images';
import ImageList from 'components/image/list';
import ImagesStore from 'stores/images';

@connectToStores
export default class ImageLayout extends React.Component {
  static propTypes = {
    images: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.id,
        caption: React.PropTypes.string,
        link: React.PropTypes.string,
        name: React.PropTypes.string,
        user_id: React.PropTypes.id
      })
    )
  }

  static getStores(props) {
    return [ImagesStore];
  }

  static getPropsFromStores(props) {
    return ImagesStore.getState();
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
