import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';
import Trener from './Trener';

function App() {
  const [isModal, setIsModal] = useState(false);

  const showModalHandler = () => {
    setIsModal(true);
  };

  const hideModalHandler = () => {
    setIsModal(false);
  };

  return (
    <CartContextProvider>
      {isModal && <Cart onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <Trener />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
