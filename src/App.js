import React from 'react';
import Routes from './routes/routes';
import GameStoreProvider from './contexts/Provider';
import './styles/Global.css';

const App = () => (
  <GameStoreProvider>
    <Routes />
  </GameStoreProvider>
);

export default App;
