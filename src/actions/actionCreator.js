import {
  SET_CURRENT_TEACHER,
} from './actionTypes';

export const setCurrentTeacher = (teacher) => ({
  type: SET_CURRENT_TEACHER,
  teacher: teacher
});

