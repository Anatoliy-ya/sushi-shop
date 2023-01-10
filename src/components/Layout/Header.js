import React from 'react';
import sushiImg from '../../assets/111.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Курхя</h1>
        <HeaderCartButton onShowModal={props.onShowModal} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImg} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
}
