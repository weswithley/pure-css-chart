// library
import React from 'react';

// components
import { Forecast } from '../Forecast';
import { Footer } from '../Footer';

export const Wrapper = () => {
  return (
    <div className="wrapper container">
      <Forecast></Forecast>
      <Footer></Footer>
    </div>
  );
};