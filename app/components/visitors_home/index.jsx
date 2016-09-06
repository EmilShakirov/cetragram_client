import React from 'react';
import { Button, Col, Grid, Row, Well } from 'react-bootstrap';
import ApplicationActions from 'actions/application';

export default class VisitorsHome extends React.Component {
  signIn() {
    ApplicationActions.openModal({ name: 'signIn' });
  }

  signUp() {
    ApplicationActions.openModal({ name: 'signUp' });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 8 } xsOffset={ 3 }>
            <Well>
              You take the blue pill, the story ends.
              You wake up in your bed and believe whatever you want to believe.
              You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes.
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } xsOffset={ 5 }>
            <Button
              bsSize= "large"
              bsStyle="primary"
              onClick={ ::this.signIn }
            >
              IN
            </Button>&nbsp;
            <Button
              bsSize= "large"
              bsStyle="danger"
              onClick={ ::this.signUp }
            >
              UP
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
