import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import styles from '../../styles/components/Footer.module.css';

export default function Footer() {
  const { currentShipping, amountToPay, productsQnt } = useContext(GameStoreContext);
  const two = 2;

  const history = useHistory();

  function sendToCheckout() {
    history.push('/checkout');
  }

  return (
    <footer className={ styles.container }>
      <div className={ styles.containerInformation }>
        <p>{`Itens: ${productsQnt}`}</p>
        <p>{`Shipping: $${currentShipping}`}</p>
        <p>{`Total: $${amountToPay.toFixed(two)}`}</p>
        <button
          type="button"
          onClick={ () => sendToCheckout() }
        >
          Checkout!
        </button>
      </div>

    </footer>
  );
}
