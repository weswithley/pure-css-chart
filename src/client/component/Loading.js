// library
import React from 'react';

// scss
import '../scss/loading.scss';

export const Loading = (props) => {
  const { fadeOut } = props;
  console.log('fadeOut-', fadeOut);
  const loadingClassName = `loading ${fadeOut ? 'fadeOut' : ''}`;
  console.log('loadingClassName-', loadingClassName);
  return (
    <div className={loadingClassName}></div>
  );
};