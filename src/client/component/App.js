// library
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// action
import { actionFilterList } from '../action/action'

// store
import { MainContext, mainEnum } from '../context/context';

// toolkit
import { getFiveDaysForcast } from '../toolkit/toolkit';

// components
import { Wrapper } from './Wrapper';

// scss
import '../scss/style.scss';

export const App = () => {
  const { defaultCity, dataList, mainlyReducer } = mainEnum;
  const [newDataList, mainlyReducerDispatch] = useReducer(mainlyReducer, dataList);
  const context = { defaultCity, newDataList, mainlyReducerDispatch };

  useEffect(
    () => {
      (async () => {
        const cityWithForecast = await getFiveDaysForcast(defaultCity);
        const result = {
          type: actionFilterList.INIT,
          cityWithForecast
        }

        mainlyReducerDispatch(result);
      })()

    }, [dataList]
  )

  return (
    <MainContext.Provider value={context}>
      <Wrapper></Wrapper>
    </MainContext.Provider>
  );
};