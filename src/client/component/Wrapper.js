// library
import React from 'react';

// components
import { Search } from './Search';
import { DataList } from './DataList';
import { Footer } from './Footer';

// scss
import '../scss/wrapper.scss';

export const Wrapper = () => {
  return (
    <div className="wrapper container">
      {/* <Search></Search> */}
      <DataList></DataList>
      <Footer></Footer>
    </div>
  );
};