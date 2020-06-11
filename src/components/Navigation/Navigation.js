import React from 'react';
import styles from 'styled-components';

const Navigation = () => (
  <NavigationStyle>
    <ul>
      <li>
        <a href="#main">Главная </a>
      </li>
      <li>
        <a href="#benefits">Преимущества</a>
      </li>
      <li>
        <a href="#cost">Стоимость</a>
      </li>
      <li>
        <a href="#reviews">Отзывы</a>
      </li>
    </ul>
  </NavigationStyle>
);

export default Navigation;

const NavigationStyle = styles.div`

`;
