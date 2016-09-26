import React, { Component } from 'react';
import { Button, Col, Grid, Row, Well } from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import styles from './styles';

export default class VisitorsHome extends Component {
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
            <Well className="text-center">
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
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}
