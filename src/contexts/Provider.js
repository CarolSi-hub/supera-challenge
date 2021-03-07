/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import products from '../services/products.json';
import GameStoreContext from './GameStoreContext';

export default function GameStoreProvider({ children }) {
  const notNull = 0;
  const negative = -1;
  const ten = 10;
  const maxValueForShipping = 250;

  const [cartProducts, setCartProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState(products);
  const [filterOption, setFilterOption] = useState('');
  const [totalValue, setTotalValue] = useState(notNull);
  const [currentIndex, setCurrentIndex] = useState(notNull);
  const [currentShipping, setCurrentShipping] = useState(notNull);
  const [amountToPay, setAmountToPay] = useState(notNull);
  const [productsQnt, setProductsQnt] = useState(notNull);
  const [toCheckout, setToCheckout] = useState(false);

  const filterOptions = [' ', 'Price', 'Popularity', 'Name'];

  useEffect(() => {
    function orderProductsBy(filter) {
      switch (filter) {
      case 'Price': {
        setOrderedProducts([...orderedProducts]
          .sort((item1, item2) => item1.price - item2.price));
        break;
      }
      case 'Popularity': {
        setOrderedProducts([...orderedProducts]
          .sort((item1, item2) => item2.score - item1.score));
        break;
      }
      case 'Name': {
        setOrderedProducts([...orderedProducts].sort((item1, item2) => {
          if (item1.name > item2.name) return 1;
          if (item1.name < item2.name) return negative;
          return notNull;
        }));
        break;
      }
      default:
        return setOrderedProducts(products);
      }
    }

    orderProductsBy(filterOption);
  }, [filterOption]);

  function addProductToCart(product) {
    if (cartProducts.some((item) => item.id === product.id)) {
      const productQnt = product.qnt;
      const productPosition = cartProducts.indexOf(product);
      cartProducts[productPosition].qnt = productQnt + 1;
      setCartProducts([...cartProducts]);
    } else {
      product.index = currentIndex;
      product.qnt = 1;
      setCartProducts([...cartProducts, product]);
      setCurrentIndex(currentIndex + 1);
    }
  }

  function removeProductFromCart(product) {
    if (cartProducts.some((item) => item.id === product.id)) {
      const productPosition = cartProducts.indexOf(product);
      const productQnt = product.qnt;
      if (productQnt === 1) {
        cartProducts[productPosition].qnt = 0;
        const newCart = cartProducts.filter((item) => item.id !== product.id);
        setCartProducts(newCart);
      } else {
        cartProducts[productPosition].qnt = productQnt - 1;
        setCartProducts([...cartProducts]);
      }
    }
  }

  function deleteProductFromCart(product) {
    const productPosition = cartProducts.indexOf(product);
    cartProducts[productPosition].qnt = 0;
    const newCart = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts(newCart);
  }

  useEffect(() => {
    function cartProductsQnt() {
      const numberOfProducts = cartProducts.reduce((acc, item) => {
        acc += item.qnt;
        return acc;
      }, notNull);
      setProductsQnt(numberOfProducts);
    }
    cartProductsQnt();
  }, [cartProducts]);

  useEffect(() => {
    function getTotalValue(arrayOfProducts) {
      if (arrayOfProducts.length !== notNull) {
        const newValue = arrayOfProducts.reduce((acc, item) => {
          acc += Number(item.qnt) * Number(item.price);
          return acc;
        }, notNull);
        setTotalValue(newValue);
      } else {
        setTotalValue(notNull);
      }
    }
    getTotalValue(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    function getTotalShipping(arrayOfProducts) {
      if (totalValue <= maxValueForShipping) {
        const newValue = arrayOfProducts.reduce((acc, item) => {
          acc += item.qnt * ten;
          return acc;
        }, notNull);
        setCurrentShipping(newValue);
      } else {
        setCurrentShipping(notNull);
      }
    }
    getTotalShipping(cartProducts);
  }, [cartProducts, totalValue]);

  useEffect(() => {
    function getAmountToPay() {
      setAmountToPay(currentShipping + totalValue);
    }
    getAmountToPay();
  }, [currentShipping, totalValue]);

  return (
    <GameStoreContext.Provider
      value={ {
        cartProducts,
        orderedProducts,
        addProductToCart,
        filterOptions,
        setFilterOption,
        totalValue,
        currentShipping,
        amountToPay,
        removeProductFromCart,
        deleteProductFromCart,
        productsQnt,
        setToCheckout,
        toCheckout,
      } }
    >
      {children}
    </GameStoreContext.Provider>
  );
}

GameStoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
