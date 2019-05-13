import {
  SET_CURRENT_TEACHER
} from '../actions/actionTypes'

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type){
    case SET_CURRENT_TEACHER:
      return action.teacher; 
		default:
			return {};
	}
}