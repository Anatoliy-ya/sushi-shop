import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [isCartButton, setIsCartButton] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const stylesButton = `${styles.button} ${isCartButton ? styles.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsCartButton(true);

    const timer = setTimeout(() => {
      setIsCartButton(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={stylesButton} onClick={props.onShowModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
