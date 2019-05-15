import React, { Component } from 'react'
import StudentForm from '../../components/StudentForm/StudentForm'
import TeachersList from '../../components/TeachersList/TeachersList';
import myStyles from './StudentPage.module.css';
export default class StudentPage extends Component {
  render () {
    return (
      <div className={myStyles.container}>
        <StudentForm ></StudentForm>
        <TeachersList></TeachersList>
      </div>
    )
  }
}
