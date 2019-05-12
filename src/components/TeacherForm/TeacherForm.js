import React, { Component } from 'react';
import ParamsForm from '../ParamsForm/ParamsForm';
import teacherFormConfig from './teacherFormConfig';

export default class TeacherForm extends Component {
  render () {
    return (
      <div>
        <ParamsForm
          config={teacherFormConfig}
        />
      </div>
    )
  }
}
