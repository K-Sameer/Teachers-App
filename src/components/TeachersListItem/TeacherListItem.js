import React, { Component } from 'react'
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';
import styles from './TeacherListItem.module.css';
export default class TeacherListItem extends Component {
  
  render() {
    const { name, surname, details, interests,  } = this.props.teacher;
    return (
      <Card className={styles.Card}>
        <CardMedia
          image="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png"
          className={styles.CardMedia}
        />
        <CardContent>
          <Typography variant="h6" component="h6"> {name + ' ' + surname }</Typography>
          <Typography component = "p"> {details} </Typography>
          {/* <Typography>{
              interests.map(interest =>
                return 
                  <p>

                  </p>

              )
            }</Typography> */}
        </CardContent>
      </Card>
    )
  }
}
