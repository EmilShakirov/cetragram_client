import React, { Component } from 'react';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <p className="footer-text">cetragram — like instagram, but for poor people.</p>
      </footer>
    );
  }
}
