import React from 'react';

// action
import { actionFilterList } from '../action/action';

// reducer
import { setForecastDataReducer } from '../reducer/reducer';

// fetching data
const forecastData = {};

export const mainStore = {
  forecastData,
  setForecastDataReducer
}

export const MainContext = React.createContext(mainStore);