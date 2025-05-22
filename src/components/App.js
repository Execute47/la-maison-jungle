import React from 'react';
import process from 'process';

import Banner from './Banner';
import logo from '../assets/logo.png';

// import Cart from './Cart'
import ShoppingList from './ShoppingList';

// injecte globalement `process` pour éviter l’erreur
window.process = process;

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  );
}

export default App;
