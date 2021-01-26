// library
import React, { useEffect, useReducer, useState } from 'react';

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
  const [newCity, mainlyStateDispatch] = useState(defaultCity);
  const context = { defaultCity, newCity, mainlyStateDispatch, newDataList, mainlyReducerDispatch };

  useEffect(
    () => {
      (async () => {
        const cityWithForecast = await getFiveDaysForcast(defaultCity);
        const resultData = {
          type: actionFilterList.INIT,
          cityWithForecast
        }

        mainlyReducerDispatch(resultData);

        const tempCity = cityWithForecast['parent']['title'] + '/' + cityWithForecast['title']
        mainlyStateDispatch(tempCity);

      })()

    }, [dataList]
  )

  return (
    <MainContext.Provider value={context}>
      <Wrapper></Wrapper>
    </MainContext.Provider>
  );
};