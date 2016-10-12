import React, {PropTypes} from 'react';
import Loader from 'react-loader-advanced';
import Spinner from 'halogen/ClipLoader';

const DEFAULT_BLUR_PX = 3;

export default class BaseLoader extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  render() {
    return (
      <Loader
        contentBlur={ DEFAULT_BLUR_PX }
        show={ this.props.isLoading }
        message={ <Spinner color="#fff" size="64px"/> }
      >
        { this.props.children }
      </Loader>
    );
  }
}
