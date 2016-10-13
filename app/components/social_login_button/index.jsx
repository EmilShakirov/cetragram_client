import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import OauthActions from 'actions/oauth';

export default class SocialLoginButton extends Component {
  static propTypes = {
    provider: PropTypes.string
  }

  auth = () => {
    OauthActions.auth(this.props.provider);
  }

  render() {
    return (
      <Button
        bsSize= "large"
        bsStyle="default"
        onClick={ this.auth }
      >
        <FontAwesome
          name={ this.props.provider }
          style={ { minWidth: '25px' } }
        />
      </Button>
    );
  }
}
