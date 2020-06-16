import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => (
  <>
    <h2 className={styles.benefTitle}>Преимущества</h2>
    <div id="benefits" className={styles.container}>
      <img
        className={styles.img}
        alt="car"
        src={require('../../img/bf73c87bc2a79f028d36fd0a77263351.png')}
      />
      <ul className={styles.benefList}>
        <li className={styles.benefItem}>
          <p className={styles.title}>Lorem, ipsum</p>

          <p className={styles.discription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li className={styles.benefItem}>
          <p className={styles.title}>Lorem, ipsum</p>
          <p className={styles.discription}>
            Lorem, ipsum dolor sit amet consectetur.
          </p>
        </li>
        <li className={styles.benefItem}>
          <p className={styles.title}>Lorem, ipsum</p>
          <p className={styles.discription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </li>
      </ul>
    </div>
  </>
);

export default Benefits;
