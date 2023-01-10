import React from 'react';
import styles from './Card.module.css';

export default function Cart(props) {
  return <div className={styles.card}>{props.children}</div>;
}
