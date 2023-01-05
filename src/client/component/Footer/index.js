// library
import React from 'react';

// scss
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer container'>
      <span>Powered by </span>
      <a href='https://www.weatherapi.com/' target='_blank'>Weather API</a>
    </footer>
  );
};