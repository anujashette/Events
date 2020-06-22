import { combineReducers } from 'redux'
import event from './eventReducer'

const compareApp = combineReducers({
  event
});

export default compareApp;