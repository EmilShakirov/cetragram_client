import React, {PropTypes} from 'react';
import Loader from 'react-loader-advanced';
import Spinner from 'halogen/ClipLoader';

const DEFAULT_BLUR_PX = 5;

export default class BaseLoader extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  render() {
    return (
      <Loader
        backgroundStyle={ {backgroundColor: 'rgba(255, 255, 255, 0.16)'} }
        contentBlur={ DEFAULT_BLUR_PX }
        show={ this.props.isLoading }
        message={ <Spinner color="#080808" size="64px"/> }
      >
        { this.props.children }
      </Loader>
    );
  }
}
