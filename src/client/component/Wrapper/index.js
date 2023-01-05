// library
import React from 'react';

// components
import { Forecast } from '../Forecast';
import { Footer } from '../Footer';

// scss
import './wrapper.scss';

export const Wrapper = () => {
  return (
    <>
      <div className="wrapper container">
        <Forecast></Forecast>
      </div>
      <Footer></Footer>
    </>
  );
};