import React from 'react';
import styles from 'styled-components';

const OrderForm = () => {
  return (
    <OrderFormStyle>
      <label for="fname">Ваше имя</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Введите имя"
      />
      <label for="phone">Телефон</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Введите телефон"
        required
      />
      <label for="email">Email</label>
      <input
        type="text"
        id="adr"
        name="email"
        placeholder="Введите почту"
      ></input>
      <input type="submit" value="Заказать" class="btn" />
    </OrderFormStyle>
  );
};

export default OrderForm;

const OrderFormStyle = styles.div`

`;
