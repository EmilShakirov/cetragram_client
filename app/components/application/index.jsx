import React, { Component } from 'react';
import session from 'services/session';
import Footer from 'components/footer';
import Header from 'components/header';
import Modals from 'components/modals';
import styles from './styles';

export default class Application extends Component {
  renderHeader = () => {
    if (session.loggedIn()) {
      return <Header/>;
    }
  }

  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          { this.renderHeader() }
          { this.props.children }
        </main>
        <Footer/>
        <Modals/>
      </div>
    );
  }
}
