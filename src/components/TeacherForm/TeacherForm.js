import React, { Component } from 'react';
import ParamsForm from '../ParamsForm/ParamsForm';
import teacherFormConfig from './teacherFormConfig';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setCurrentTeacher } from '../../actions/actionCreator'
class TeacherForm extends Component {

  render () {
    return (
      <ParamsForm
        config={teacherFormConfig}
        onSubmit={this.props.setCurrentTeacher}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setCurrentTeacher }, dispatch);
export default connect(null, mapDispatchToProps)(TeacherForm);

