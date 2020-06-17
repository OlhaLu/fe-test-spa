import React from 'react';
import styles from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <ul>
          <li>
            <label htmlFor="fname">Ваше имя</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Введите имя"
            />
          </li>
          <li>
            <label htmlFor="phone">Телефон</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Введите телефон"
              required
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="adr"
              name="email"
              placeholder="Введите почту"
            ></input>
          </li>
        </ul>
        <button className={styles.submit} type="submit">
          Заказать
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
