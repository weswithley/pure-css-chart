// action
import { actionFilterList } from '../action/action';

// toolkit
import {} from '../toolkit/toolkit';

export const mainlyReducer = (state, action) => {
  let result = [];
  switch (action.type) {
    case actionFilterList.INIT:
      result = action['cityWithForecast']['consolidated_weather'];
      return result

    case actionFilterList.SEARCH:
      return state
      // return result

    default:
      return state
  }

}