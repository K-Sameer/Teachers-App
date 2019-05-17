import {
  SET_CURRENT_TEACHER,
  SET_CURRENT_STUDENT,
  SET_TEACHERS,
} from './actionTypes';

import { firebase } from "../App"


export const setCurrentTeacher = (teacher) => {
  // //TODO redux thunk and  
  // console.log(firebase)
  // const newPostKey = firebase.teachers().push().key;

  // var updates = {};
  // updates['/teachers/' + newPostKey] = teacher;

  // firebase.db.ref().update(updates);

  return {
    type: SET_CURRENT_TEACHER,
    teacher: teacher
  }

};

export const setCurrentStudent = (student) => ({
  type: SET_CURRENT_STUDENT,
  student: student
});

export const setTeachers = (teachers) => ({
  type: SET_TEACHERS,
  teachers: Array.from(teachers)
});

