import React from 'react';
import styles from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <img
        alt="logo"
        src="https://cdn.dribbble.com/users/2943657/screenshots/6983950/nexstream_win_2_logo_only.jpg"
        width="50"
        height="50"
      />
      <button>Наверх &#11014</button>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styles.div`

`;
