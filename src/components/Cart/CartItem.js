import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}> x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.btn_minus} onClick={props.onRemove}>
          −
        </button>
        <span className={classes.amount_btn}>{props.amount}</span>
        <button className={classes.btn_plus} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
