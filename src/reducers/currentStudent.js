import {
  SET_CURRENT_STUDENT
} from '../actions/actionTypes'

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type){
    case SET_CURRENT_STUDENT:
      return action.student; 
		default:
			return state;
	}
}