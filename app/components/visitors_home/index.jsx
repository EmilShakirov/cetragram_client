import React, { PropTypes, Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Button, Col, Grid, Row, Well } from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import ApplicationStore from 'stores/application';
import OauthActions from 'actions/oauth';
import BaseLoader from 'components/base_loader';
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

  socialAuth = (provider) => {
    OauthActions.auth(provider);
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

              <Row>
                <Button
                  bsSize= "large"
                  bsStyle="default"
                  onClick={ () => { this.socialAuth('facebook'); } }
                >
                  Facebook
                </Button>
                &nbsp;
                <Button
                  bsSize= "large"
                  bsStyle="default"
                  onClick={ () => { this.socialAuth('twitter'); } }
                >
                  Twitter
                </Button>
              </Row>
            </Well>
          </BaseLoader>
          </Col>
        </Row>
      </Grid>
    );
  }
}
