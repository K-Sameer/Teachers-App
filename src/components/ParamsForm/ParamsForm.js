import React, { Component } from 'react'

export default class ParamsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    renderGroup(group){
        console.log(`Rendering Group: ${group.name}`);
        group.controls.map((control) => this.renderControl(control))
    }

    renderControl(control){
        console.log(`Rendering Control: ${control.name}`);
    }

    render() {
        return (
        <div>
            <header>ParamsForm</header>
            {this.props.config.groups.map((group) => this.renderGroup(group))}
        </div>
        )
    }
}
