import React, { Component } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
export default class ParamsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        params: [].concat(...this.props.config.groups.map(group => group.controls.map((control) => ({
            name: control.name,
            options: control.options,
            value: 0
        }))))
      }
      this.renderSelect = this.renderSelect.bind(this)
    }

    handleChange = event => {
        const paramsState = this.state.params.map((param) => (param.name === event.target.name? {...param, value:event.target.value} : param));
        this.setState({params:paramsState});
    }

    renderGroup(group){
        return <div key={group.name}>{group.controls.map((control) => this.renderControl(control))}</div>;
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
        const controlState = this.state.params.find((ctl) => ctl.name === control.name);

        return <FormControl key={control.name}>
        <InputLabel htmlFor={control.name}>{control.label}</InputLabel>
        <Select 
            value={controlState.value}
            onChange={this.handleChange}
            inputProps={{name: control.name, id: control.name}}
            renderValue={() => control.options.find((opt) => opt.value === controlState.value).label}
        >
            {control.options.map((option) => 
                (<MenuItem  
                    value={option.value} 
                    key={option.value}>{option.label}
                </MenuItem>)
                )}
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

