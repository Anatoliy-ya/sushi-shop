import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props) {
  const ctxItems = useContext(CartContext);

  const totalAmount = `$${Math.abs(ctxItems.totalAmount.toFixed(2))}`;

  const addItemCartHandler = (item) => {
    ctxItems.addItem({ ...item, amount: 1 });
  };

  const removeItemCartHandler = (id) => {
    ctxItems.removeItem(id);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {ctxItems.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemCartHandler.bind(null, item)}
          onRemove={removeItemCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideModal={props.onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Итоги</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideModal}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
}
