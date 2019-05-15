import React, { Component } from 'react';
import TeacherListItem from '../TeachersListItem/TeacherListItem';
import List from '@material-ui/core/List';
import myStyles from './TeachersList.module.css';

export default class TeachersList extends Component {
  render() {
    return (
      <List className={myStyles.container}>
          <TeacherListItem>
          
          </TeacherListItem>
      </List>
    )
  }
}
