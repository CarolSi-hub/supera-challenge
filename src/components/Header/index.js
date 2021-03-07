import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import styles from '../../styles/components/Header.module.css';

export default function Header({ button }) {
  const history = useHistory();

  function sendToPage() {
    history.push(button === 'Cart' ? '/cart' : '/');
  }

  return (
    <header className={ styles.container }>
      <h1>Game Store</h1>
      <button
        type="button"
        onClick={ sendToPage }
      >
        <img
          src={ button === 'Cart' ? 'svgIcons/cart-50.png' : 'svgIcons/home-50.png' }
          alt="icon"
        />
      </button>
    </header>
  );
}

Header.propTypes = {
  button: PropTypes.bool.isRequired,
};
