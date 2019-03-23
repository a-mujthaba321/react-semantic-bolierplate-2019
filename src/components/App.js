import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import Sidebar from './body/Sidebar';
import LoanScheme from './sample/LoanScheme';

export default class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12}>
              <div>
                <Switch>
                  <Route path="/LoanSchemes" component={LoanScheme} />
                </Switch>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
