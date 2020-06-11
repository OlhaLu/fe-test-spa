import React from 'react';
import Navigation from '../Navigation/Navigation';
import OrderForm from '../OrderForm/OrderForm';
import styles from 'styled-components';

const Main = () => {
  return (
    <MainStyle id="main">
      <Navigation />
      <OrderForm />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styles.div`
`;
