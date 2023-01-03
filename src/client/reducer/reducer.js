// action
import { actionFilterList } from '../action/action';

export const setForecastDataReducer = (state, action) => {
  let result = [];
  switch (action.type) {
    case actionFilterList.INIT:
      result = action['forecast']['data'];
      return result

    case actionFilterList.SEARCH:
      result = action['forecast']['data'];
      return result

    default:
      return state
  }

}