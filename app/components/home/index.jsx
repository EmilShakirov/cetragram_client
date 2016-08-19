import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>App</h1>
          <p>
            Ma app ma rools
          </p>
        </Jumbotron>
      </Grid>
    );
  }
}
