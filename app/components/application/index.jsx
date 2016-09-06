import React from 'react';
import session from 'services/session';
import Header from 'components/header';
import Modals from 'components/modals';
import Footer from 'components/footer';
import styles from './styles';

export default class Application extends React.Component {
  renderHeader() {
    if (session.loggedIn()) {
      return <Header/>;
    }
  }

  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          { ::this.renderHeader() }
          { this.props.children }
        </main>
        <Footer/>
        <Modals/>
      </div>
    );
  }
}
