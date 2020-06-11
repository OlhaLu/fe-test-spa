import React from 'react';
import Header from './Header/Header';
import Main from './MainBlock/Main';
import Benefits from './BenefitsBlock/Benefits';
import Reviews from './ReviewsBlock/Reviews';
import Footer from './Footer/Footer';
import styles from 'styled-components';

const App = () => (
  <AppStyle>
    <Header />
    <Main />
    <Benefits />
    <Reviews />
    <Footer />
  </AppStyle>
);

export default App;

const AppStyle = styles.div`
width: 1920px;
background: #F0F8FF;
  `;
