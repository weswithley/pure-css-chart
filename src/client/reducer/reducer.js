// action
import { actionFilterList } from '../action/action';

export const mainlyReducer = (state, action) => {
  let result = [];
  switch (action.type) {
    case actionFilterList.INIT:
      result = action['cityWithForecast']['consolidated_weather'];
      return result

    case actionFilterList.SEARCH:
      result = action['cityWithForecast']['consolidated_weather'];
      return result

    default:
      return state
  }

}