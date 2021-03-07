import React, { useContext } from 'react';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import { Header, ProductList, Filter, Footer } from '../../components';

export default function Home() {
  const { orderedProducts } = useContext(GameStoreContext);
  return (
    <main>
      <Header button="Cart" />
      <Filter />
      <ProductList productList={ orderedProducts } />
      <Footer />
    </main>
  );
}
