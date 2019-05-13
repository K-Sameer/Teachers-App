import { combineReducers } from 'redux';
import currentTeacher from './currentTeacher';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  currentTeacher: currentTeacher
});