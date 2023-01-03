// library
import React, { useEffect, useReducer, useState } from 'react';

// action
import { actionFilterList } from '../action/action'

// store
import { MainContext, mainStore } from '../context/context';

// api fetcher
import { apiPathList, apiFetcher } from '../apiService';

// components
import { Loading } from './Loading';
import { Wrapper } from './Wrapper';

// scss
import '../scss/style.scss';

export const App = () => {
  const { forecastData, setForecastDataReducer } = mainStore;
  const [ newForecastData, setNewForecastDataReducer ] = useReducer(setForecastDataReducer, {...forecastData});
  const [ isLoading, setIsLoading ] = useState(false);

  const context = {
    newForecastData,
    setNewForecastDataReducer,
    isLoading,
    setIsLoading
  };

  useEffect(() => {
    (async () => {
        const forecast = await apiFetcher.getFiveForecast();
        const resultData = {
          type: actionFilterList.INIT,
          forecast
        }

        setNewForecastDataReducer(resultData);
        setIsLoading(true);

    })();

  }, [])

  return (
    <MainContext.Provider value={context}>
      <Wrapper></Wrapper>
    </MainContext.Provider>
  );
};