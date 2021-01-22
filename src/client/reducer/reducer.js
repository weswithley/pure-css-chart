// action
import { actionFilterList } from '../action/action';

// toolkit
import {} from '../toolkit/toolkit';

export const mainlyReducer = (state, action) => {
  let result = [];
  switch (action.type) {

    case actionFilterList.SEARCH:
      console.log('SEARCH');
      return result

    default:
      return state
  }

}