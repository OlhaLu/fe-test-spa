import React from 'react';
import styles from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <ul>
          <li>
            <label for="fname">Ваше имя</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Введите имя"
            />
          </li>
          <li>
            <label for="phone">Телефон</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Введите телефон"
              required
            />
          </li>
          <li>
            <label for="email">Email</label>
            <input
              type="text"
              id="adr"
              name="email"
              placeholder="Введите почту"
            ></input>
          </li>
          <li>
            <input type="submit" value="Заказать" class="btn" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default OrderForm;