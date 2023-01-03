// library
import React from 'react';

// scss
import loadingCSS from './loading.module.scss';

export const Loading = (props) => {
  const { fadeOut } = props;
  const loadingClassName = `${loadingCSS['loading']} ${fadeOut ? loadingCSS['fadeOut'] : ''}`;
  return (
    <div className={loadingClassName}></div>
  );
};