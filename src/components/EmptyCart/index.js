import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/components/EmptyCart.module.css';

export default function EmptyCart() {
  const history = useHistory();

  function returnToHome() {
    history.push('/');
  }
  return (
    <div className={ styles.container }>
      <h1>Empty Cart ;(</h1>
      <button
        type="button"
        onClick={ () => returnToHome() }
      >
        Return to Home
      </button>

    </div>
  );
}
