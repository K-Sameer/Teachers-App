import React, { Component } from 'react'
import ParamsForm from '../ParamsForm/ParamsForm'
import teacherFormConfig from './teacherFormConfig';

export default class TeacherForm extends Component {
  render() {
    return (
      <div>
          <title>TeacherForm</title>
          <ParamsForm
            config={teacherFormConfig}
          />
          
      </div>
    )
  }
}
