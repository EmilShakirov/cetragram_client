import React, { Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Nav, NavItem } from 'react-bootstrap';
import SessionActions from 'actions/session';
import session from 'services/session';

@connectToStores
export default class NavigationRight extends Component {
  static getStores(props) {
    return [session.store()];
  }

  static getPropsFromStores(props) {
    return session.store().getState();
  }

  signOut = () => {
    SessionActions.delete(session.currentUser());
  }

  render() {
    if (session.loggedIn()) {
      return (
        <Nav pullRight>
          <NavItem onClick={ this.signOut }>
            Sign out
          </NavItem>
        </Nav>
      );
    }

    return (<div/>);
  }
}
