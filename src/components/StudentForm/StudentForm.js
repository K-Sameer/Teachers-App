import React, { Component } from 'react';
import ParamsForm from '../ParamsForm/ParamsForm';
import studentFormConfig from './studentFormConfig';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setCurrentStudent } from '../../actions/actionCreator'
import myStyles from './StudentForm.module.css';

class StudentForm extends Component {
  render () {
    return (
      <div className={myStyles.studentForm}>
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

