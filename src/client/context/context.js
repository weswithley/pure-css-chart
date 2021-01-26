import React from 'react';

// action
import { actionFilterList } from '../action/action';

// reducer
import { mainlyReducer } from '../reducer/reducer';

const defaultCity = 'taipei';

// fetching data list
const dataList = []

export const mainEnum = {
  defaultCity,
  dataList,
  mainlyReducer
}

export const MainContext = React.createContext(mainEnum);