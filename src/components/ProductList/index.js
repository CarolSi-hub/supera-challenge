import React from 'react';
import ProductCard from '../ProductCard';
import styles from '../../styles/components/ProductList.module.css';

export default function ProductList({ productList }) {
  return (
    <div className={ styles.container }>
      <ProductCard productList={ productList } />
    </div>
  );
}
