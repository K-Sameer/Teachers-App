import React, { Component } from 'react';
import ParamsForm from '../ParamsForm/ParamsForm';
import studentFormConfig from './studentFormConfig';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setCurrentStudent } from '../../actions/actionCreator'
import styles from './StudentForm.module.css';

class StudentForm extends Component {
  render () {
    return (
      <div className={styles.studentForm}>
        <ParamsForm
          config={studentFormConfig}
          onSubmit={this.props.setCurrentStudent}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setCurrentStudent }, dispatch);
export default connect(null, mapDispatchToProps)(StudentForm);

