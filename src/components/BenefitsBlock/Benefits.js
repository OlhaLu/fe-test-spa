import React from 'react';
import styles from 'styled-components';

const Benefits = () => (
  <BenefitsStyle id="benefits">
    <img
      alt="car"
      src="http://galickie-limuziny.com.ua/wp-content/uploads/2017/12/BMW-X5-Black.jpg"
    />
    <ul>
      <li class="cart-item icon01">
        <p class="text-title">Lorem, ipsum</p>
        <p class="discription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li class="cart-item icon01">
        <p class="text-title">Lorem, ipsum</p>
        <p class="discription">Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li class="cart-item icon01">
        <p class="text-title">Lorem, ipsum</p>
        <p class="discription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
    </ul>
  </BenefitsStyle>
);

export default Benefits;

const BenefitsStyle = styles.div`
display: flex;
`;
