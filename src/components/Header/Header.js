import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.img}
        alt="logo"
        src={require('../../img/mainLogo.png')}
      />
      <div className={styles.contact}>
        <a href="tel:+380999999999" className={styles.link}>
          +38 099 999 99 99
        </a>
        <a href="#cost" className={styles.order}>
          Заказать
        </a>
      </div>
    </div>
  );
};

export default Header;
