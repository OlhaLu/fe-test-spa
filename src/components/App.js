import React from 'react';
import Header from './Header/Header';
import Main from './MainBlock/Main';
import Benefits from './BenefitsBlock/Benefits';
import Cost from './CostBlock/Cost';
import Reviews from './ReviewsBlock/Reviews';
import Footer from './Footer/Footer';
import styles from 'styled-components';

const App = () => (
  <AppStyle>
    <Header />
    <Main />
    <Benefits />
    <Cost />
    <Reviews />
    <Footer />
  </AppStyle>
);

export default App;

const AppStyle = styles.div`
margin: auto;
width: 1400px;
background: #F5F5F5;
  `;
