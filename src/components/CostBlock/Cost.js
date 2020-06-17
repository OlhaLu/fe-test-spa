import React from 'react';
import styles from './Cost.module.css';

const Cost = () => (
  <div id="cost" className={styles.container}>
    <h2 className={styles.costTitle}>Стоимость</h2>
    <ul className={styles.list}>
      <li className={styles.item}>
        <h3 className={styles.title}>Lorem, ipsum</h3>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.lastPrice}>399 грн</p>
        <p className={styles.nextPrice}> 299 грн</p>
        <a href="#order" className={styles.button}>
          Заказать
        </a>
      </li>
      <li className={styles.item}>
        <h3 className={styles.title}>Lorem, ipsum</h3>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.discription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.lastPrice}>599 грн</p>
        <p className={styles.nextPrice}>499 грн</p>
        <a href="#order" className={styles.button}>
          Заказать
        </a>
      </li>
    </ul>
    <p className={styles.note}>
      <span className={styles.span}>*</span> Lorem, ipsum dolor sit amet
      consectetur adipisicing
    </p>
  </div>
);

export default Cost;
