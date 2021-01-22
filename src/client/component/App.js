// library
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

// action
import { actionFilterList } from '../action/action'

// store
import { MainContext, mainEnum } from '../context/context';

// components
import { Wrapper } from './Wrapper';

// scss
import '../scss/style.scss';

export const App = () => {
  const { dataList, mainlyReducer } = mainEnum;
  const [newDataList, mainlyReducerDispatch] = useReducer(mainlyReducer, dataList);
  const context = { newDataList, dataList, mainlyReducerDispatch }

  useEffect(
    () => {
      console.log('useEffect');
    }, []
  )

  return (
    <MainContext.Provider value={context}>
      <Wrapper></Wrapper>
    </MainContext.Provider>
  );
};