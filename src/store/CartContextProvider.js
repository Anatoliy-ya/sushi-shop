import React, { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const totalAmountCart = state.totalAmount + action.item.amount * action.item.price;

    const existingItemCartID = state.items.findIndex((i) => action.item.id === i.id);

    const existingItemCart = state.items[existingItemCartID];

    let updatedObj;
    let updatedArr;

    if (existingItemCart) {
      updatedObj = {
        ...existingItemCart,
        amount: existingItemCart.amount + action.item.amount,
      };
      updatedArr = [...state.items];
      updatedArr[existingItemCartID] = updatedObj;
    } else {
      updatedObj = { ...action.item };
      updatedArr = state.items.concat(updatedObj);
    }

    return {
      items: updatedArr,
      totalAmount: totalAmountCart,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemCartID = state.items.findIndex((i) => action.id === i.id);
    const existingItemCart = state.items[existingItemCartID];
    const totalAmountCart = state.totalAmount - existingItemCart.price;

    let updatedArr;

    if (existingItemCart.amount === 1) {
      updatedArr = state.items.filter((i) => {
        return i.id !== action.id;
      });
    } else {
      const updatedObj = {
        ...existingItemCart,
        amount: existingItemCart.amount - 1,
      };
      updatedArr = [...state.items];
      updatedArr[existingItemCartID] = updatedObj;
    }

    return {
      items: updatedArr,
      totalAmount: totalAmountCart,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartState({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartContextProvider;
