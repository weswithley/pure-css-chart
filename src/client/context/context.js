import React from 'react';

// action
import { actionFilterList } from '../action/action';

// reducer
import { mainlyReducer } from '../reducer/reducer';

// fetching data list
const dataList = []

export const mainEnum = {
  dataList,
  mainlyReducer
}

export const MainContext = React.createContext(mainEnum);