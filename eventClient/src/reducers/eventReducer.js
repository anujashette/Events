import * as types from '../constants/types'

const INITIAL_STATE = {
  events: []
};

export default function (state = INITIAL_STATE, action) {  
  switch (action.type) {
    case types.FETCH_EVENTS:
      return {
        ...state, events: action.payload
      };
    default:
      return state
  }
}
