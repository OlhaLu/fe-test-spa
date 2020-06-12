import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.img} alt="logo" src="../../img/ВекторLogo.jpg" />
      <div className={styles.contact}>
        <a href="+380999999999" className={styles.link}>
          +38 099 999 99 99
        </a>
        <button className={styles.buttonOrder}>Заказать</button>
      </div>
    </div>
  );
};

export default Header;
