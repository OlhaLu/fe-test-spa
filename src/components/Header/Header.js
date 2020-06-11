import React from 'react';
import styles from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <img
        alt="logo"
        src="https://cdn.dribbble.com/users/2943657/screenshots/6983950/nexstream_win_2_logo_only.jpg"
        width="50"
        height="50"
      />
      <div>
        <a href="+380999999999">+38 099 999 99 99</a>
        <button>Заказать</button>
      </div>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styles.div`

`;
