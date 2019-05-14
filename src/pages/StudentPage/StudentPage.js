import React, { Component } from 'react'
import StudentForm from '../../components/StudentForm/StudentForm'
import styles from './StudentPage.module.css';
import TeachersList from '../../components/TeachersList/TeachersList';
import myStyles from './StudentPage.module.css';
export default class StudentPage extends Component {
  render () {
    return (
      <div className={myStyles.container}>
        <StudentForm className={styles.container}></StudentForm>
        <TeachersList></TeachersList>
      </div>
    )
  }
}
