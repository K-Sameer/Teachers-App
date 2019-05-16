import {
  SET_TEACHERS
} from '../actions/actionTypes'

const initialState = {
  list: null
};

export default (state = initialState, action) => {
	switch (action.type){
    case SET_TEACHERS:
      return { ...state, list: action.teachers }; 
		default:
			return state;
	}
}