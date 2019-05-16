import React, { Component } from 'react'
import TeacherForm from '../../components/TeacherForm/TeacherForm'
import styles from './TeacherPage.module.css';

export default class TeacherPage extends Component {

  render () {
    return (
        <div className={styles.container} >
          <TeacherForm></TeacherForm>
        </div>
    )
  }
}
