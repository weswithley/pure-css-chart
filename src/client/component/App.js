// library
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

// action
import { actionFilterList } from '../action/action'

// store
import { MainContext, mainEnum } from '../context/context';

// api path enum
import { apiFetchEnum } from '../api/apiEnum'

// components
import { Wrapper } from './Wrapper';

// scss
import '../scss/style.scss';

export const App = () => {
  const { dataList, mainlyReducer } = mainEnum;
  const [newDataList, mainlyReducerDispatch] = useReducer(mainlyReducer, dataList);
  const context = { newDataList, dataList, mainlyReducerDispatch };

  useEffect(
    () => {
      (async () => {
        const city = await apiFetchEnum['getWoeid']('taipei');
        const woeid = city.length > 0 ? city[0]['woeid'] : '';
        const cityWithForecast = await apiFetchEnum['getFiveForecast'](woeid);

        const result = {
          type: actionFilterList.INIT,
          cityWithForecast: cityWithForecast
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