import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import styles from '../../styles/components/Checkout.module.css';

export default function Checkout() {
  const { cartProducts, amountToPay } = useContext(GameStoreContext);
  const history = useHistory();
  const two = 2;

  function returnToHome() {
    history.push('/');
  }

  return (
    <div className={ styles.container }>
      <div>
        {' '}
        {cartProducts.map((item, index) => (
          <p key={ item.id }>
            <span>{`Item: ${index}`}</span>
            <span>{item.name}</span>
            <span>{`$ ${item.price}`}</span>
            <span>{`Qnt: ${item.qnt}`}</span>
          </p>))}
        <p>{`Total: $${amountToPay.toFixed(two)}`}</p>
      </div>
      <button
        type="button"
        onClick={ () => returnToHome() }
      >
        Return to Home
      </button>
    </div>
  );
}
