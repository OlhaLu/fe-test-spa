import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href="#main" className={styles.link}>
          Главная
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#benefits" className={styles.link}>
          Преимущества
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#cost" className={styles.link}>
          Стоимость
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#reviews" className={styles.link}>
          Отзывы
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
