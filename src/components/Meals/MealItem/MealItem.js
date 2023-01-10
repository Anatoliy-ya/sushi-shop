import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm.js';
import { CartContext } from '../../../store/cart-context';

export default function MealItem(props) {
  const ctxCart = useContext(CartContext);
  const priceItem = props.price.toFixed(2);

  const itemAmountHandler = (amount) => {
    ctxCart.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${priceItem}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={itemAmountHandler} id={props.id} />
      </div>
    </li>
  );
}
