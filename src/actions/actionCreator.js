import {
  SET_CURRENT_TEACHER,
  SET_CURRENT_STUDENT,
  SET_TEACHERS,
} from './actionTypes';

export const setCurrentTeacher = (teacher) => ({
  type: SET_CURRENT_TEACHER,
  teacher: teacher
});

export const setCurrentStudent = (student) => ({
  type: SET_CURRENT_STUDENT,
  student: student
});

export const setTeachers = (teachers) => ({
  type: SET_TEACHERS,
  teachers: Array.from(teachers)
});

