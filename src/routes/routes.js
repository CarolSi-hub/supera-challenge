import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart, CheckoutPage } from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ Cart } />
      <Route path="/checkout" component={ CheckoutPage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
