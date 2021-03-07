import React, { useContext } from 'react';
import { Header, ProductList, Footer, EmptyCart } from '../../components';
import { GameStoreContext } from '../../contexts/GameStoreContext';

export default function Cart() {
  const { cartProducts } = useContext(GameStoreContext);

  const notNull = 0;

  return (
    <main>
      <Header button="Home" />
      <div>
        { cartProducts.length === notNull
          ? <EmptyCart />
          : <ProductList productList={ cartProducts } />}
      </div>
      <Footer />
    </main>
  );
}
