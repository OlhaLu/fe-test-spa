import React from 'react';
import styles from './Cost.module.css';

const Cost = () => (
  <div id="cost" className={styles.container}>
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
        <button className={styles.button}>Заказать</button>
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
        <button className={styles.button}>Заказать</button>
      </li>
    </ul>
  </div>
);

export default Cost;
