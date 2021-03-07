import React, { useContext } from 'react';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import { Checkout, EmptyCart } from '../../components';
import styles from '../../styles/pages/CheckoutPage.module.css';

export default function CheckoutPage() {
  const notNull = 0;
  const { cartProducts } = useContext(GameStoreContext);
  return (
    <main className={ styles.container }>
      { cartProducts.length === notNull
        ? <EmptyCart />
        : <Checkout />}
      <div />
    </main>
  );
}
