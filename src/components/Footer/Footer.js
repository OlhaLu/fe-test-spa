import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className={styles.footer}>
      <img
        className={styles.logo}
        alt="logo"
        src={require('../../img/лого1.png')}
      />
      <button className={styles.btn} onClick={scrollTop}>
        Наверх ↑
      </button>
    </div>
  );
};

export default Footer;
