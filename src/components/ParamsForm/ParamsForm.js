import React, { Component } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


export default class ParamsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        params: [].concat(...this.props.config.groups.map(group => group.controls.map((control) => ({ name:control.name, option:'', value:0 }) )))
      }
      this.renderSelect = this.renderSelect.bind(this)
    }

    handleChange = event => {
        console.log('event.target:', event.target);
        this.setState({ [event.target.name]: event.target.value });
    };

    renderGroup(group){
        console.log(`RENDERING GROUP: ${group.name}`);
        return group.controls.map((control) => this.renderControl(control))
    }

    renderControl(control){ 
        switch (control.type) {
            case 'select':
                return this.renderSelect(control);    
            default:
                return null;
        }
    }

    renderSelect(control){
        return <FormControl>
        <InputLabel htmlFor={control.name}>{control.label}</InputLabel>
        <Select
            onChange={this.handleChange}
            inputProps={{
                name: control.name,
                id: control.name
              }}
        >
            {control.options.map(
                (option) => (<MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>)
                )
            }
        </Select>
    </FormControl>
    }

    render() {       
        return (
        <div>
            <header>ParamsForm</header>
            <form>                
                {this.props.config.groups.map((group) => this.renderGroup(group))}
            </form>
        </div>
        )
    }
}

