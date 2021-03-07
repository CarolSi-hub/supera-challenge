import React, { useContext } from 'react';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import styles from '../../styles/components/ProductCard.module.css';

export default function ProductCard({ productList }) {
  const { addProductToCart,
    removeProductFromCart,
    deleteProductFromCart } = useContext(GameStoreContext);

  return (
    <section className={ styles.container }>
      {productList.map((product) => (
        <div key={ product.id } className={ styles.productCard }>
          <img src={ `assets/${product.image}` } alt="game cover" />
          <h3>{ product.name }</h3>
          <p>{`$: ${product.price}`}</p>
          <p>{`Ranking: ${product.score}`}</p>
          <div>
            <button
              type="button"
              onClick={ () => addProductToCart(product) }
            >
              <img src="svgIcons/add-image-48.png" alt="add icon" />
            </button>
            <span>{ product.qnt ? product.qnt : 0 }</span>
            <button
              type="button"
              onClick={ () => removeProductFromCart(product) }
            >
              <img src="svgIcons/subtract-30.png" alt="add icon" />
            </button>
            <button
              type="button"
              onClick={ () => deleteProductFromCart(product) }
            >
              <img src="svgIcons/remove-96.png" alt="add icon" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
