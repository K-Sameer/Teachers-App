import React, { Component } from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core';
import myStyles from './TeacherListItem.module.css';
export default class TeacherListItem extends Component {
  
  render() {
    const { name, surname, details, interests,  } = this.props.teacher;
    return (
      <Card className={myStyles.card}>
        <CardMedia
          image="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png"
          className={myStyles.CardMedia}
        />
        <Typography variant="h6" component="h6"> {name + ' ' + surname }</Typography>
        <Typography component = "p"> {details} </Typography>
        <Typography>{interests.name}</Typography>
      </Card>
    )
  }
}
