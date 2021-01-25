// library
import React from 'react';

// components
import { DataList } from './DataList';

// scss
import '../scss/wrapper.scss';

export const Wrapper = () => {
  return (
    <div className="wrapper container">
      <DataList></DataList>
    </div>
  );
};