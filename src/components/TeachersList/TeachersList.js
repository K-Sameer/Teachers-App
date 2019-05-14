import React, { Component } from 'react';
import TeacherListItem from '../TeachersListItem/TeacherListItem';
import List from '@material-ui/core/List';

export default class TeachersList extends Component {
  render() {
    return (
      <List>
          TeacherList
          <TeacherListItem></TeacherListItem>
      </List>
    )
  }
}
