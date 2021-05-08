import React from 'react';

// action
import { actionFilterList } from '../action/action';

// reducer
import { mainlyReducer } from '../reducer/reducer';

const defaultCity = 'Location fetching...';

// fetching data list
const dataList = []

export const mainEnum = {
  defaultCity,
  dataList,
  mainlyReducer
}

export const MainContext = React.createContext(mainEnum);