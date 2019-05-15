import React, { Component } from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core';
import myStyles from './TeacherListItem.module.css';
export default class TeacherListItem extends Component {
  
  render() {

    return (
      <Card className={myStyles.card}>
        <CardMedia
          image="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png"
          className={myStyles.CardMedia}
        />

        <Typography gutterBottom variant="h5" component="h2">
            Valentina Petrovna
        </Typography>
        <Typography component = "p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend.
        </Typography>
      
      </Card>
    )
  }
}
