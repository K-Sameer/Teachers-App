import { combineReducers } from 'redux';
import currentTeacher from './currentTeacher';
import currentStudent from './currentStudent';
import teachers from './teachers';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  currentTeacher: currentTeacher,
  currentStudent: currentStudent,
  teachers: teachers,
});