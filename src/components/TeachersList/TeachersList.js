import React, { Component } from 'react';
import TeacherListItem from '../TeachersListItem/TeacherListItem';
import List from '@material-ui/core/List';
import styles from './TeachersList.module.css';
import { withFirebase } from '../../components/Firebase/context';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setTeachers } from '../../actions/actionCreator'

class TeachersList extends Component {

  componentDidMount() {
    const { firebase , setTeachers } = this.props;
    
    firebase.teachers().on('value', (teachers) => {
      setTeachers(teachers.val());
    });
  }

  render() {
    const { teachers } = this.props;
    return (
      <List className={styles.container}>
        {
          teachers && teachers.map(teacher => <TeacherListItem teacher={teacher} key={teacher.name}/>)
        }
      </List>
    )
  }
}

const mapStateToProps = state => ({teachers: state.teachers.list})
const mapDispatchToProps = dispatch => bindActionCreators({ setTeachers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(TeachersList));