import React, { PropTypes, Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Button, Col, Grid, Row, Well } from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import ApplicationStore from 'stores/application';
import BaseLoader from 'components/base_loader';
import SocialLoginButton from 'components/social_login_button';
import styles from './styles';

@connectToStores
export default class VisitorsHome extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  static getStores(props) {
    return [ApplicationStore];
  }

  static getPropsFromStores(props) {
    return {
      ...ApplicationStore.getState()
    };
  }

  signIn = () => {
    ApplicationActions.openModal({ name: 'signIn' });
  }

  signUp = () => {
    ApplicationActions.openModal({ name: 'signUp' });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col
            xs={ 8 }
            xsOffset={ 2 }
            className={ styles.signButtons }
          >
          <BaseLoader isLoading={ this.props.isLoading }>
            <Well className="text-center">
              <Row>
                <Button
                  bsSize= "large"
                  bsStyle="primary"
                  onClick={ this.signIn }
                >
                  S I G N I N
                </Button>&nbsp;
                <Button
                  bsSize= "large"
                  bsStyle="danger"
                  onClick={ this.signUp }
                >
                  S I G N U P
                </Button>
              </Row>

              <br/>
              <p>Or login using social networks:</p>
              <Row>
                <SocialLoginButton provider="facebook"/>
                &nbsp;
                <SocialLoginButton provider="twitter"/>
              </Row>
            </Well>
          </BaseLoader>
          </Col>
        </Row>
      </Grid>
    );
  }
}
