import React from 'react';
import Navigation from '../Navigation/Navigation';
import OrderForm from '../OrderForm/OrderForm';
import styles from './Main.module.css';

const Main = () => {
  return (
    <>
      <Navigation />
      <div id="main" className={styles.container}>
        <h1 className={styles.mainTitle}>
          <span>Lorem, ipsum dolorsit</span> amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur
        </h1>
        <OrderForm />
      </div>
    </>
  );
};

export default Main;
