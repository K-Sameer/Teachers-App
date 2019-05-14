import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Input from '@material-ui/core/Input';
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import myStyles from './ParamsForm.module.css';
import { Button } from '@material-ui/core';

export default class ParamsForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
		params: [].concat(...this.props.config.groups.map(group => group.controls.map(control => ({
		  name: control.name,
		  options: control.options,
		  type: control.type,
		  value: control.type === 'select' ? 0 : ''
		}))))
		}
		this.renderSelect = this.renderSelect.bind(this);
	}

	handleChange = event => {
		const { value, name } = event.target;
		const paramsState = this.state.params.map((param) => (
			param.name === name ?
				{
					...param,
					value: param.type === 'radio' ? +value : value
				} :
				param
			)
		);
		this.setState({params:paramsState});
	}

	renderGroup(group){
		return (
    <div key={group.name} className={myStyles.group}>
      {
        group.name==='Button'?
          null:
          <Typography variant="h6" className={myStyles.groupTitle}>{group.name}</Typography>
      }
      <Grid container spacing={24}>
        {
          group.controls.map(
            control =>
            this.renderControl(control)
          )
        }
      </Grid>
    </div>
    )
	}

	renderControl(control){
		switch (control.type) {
			case 'select':
				return this.renderSelect(control);
			case 'input':
				return this.renderInput(control);
			case 'radio':
        return this.renderRadio(control);
      case 'button':
        return this.renderButton(control);
      case 'textfield':
				return this.renderTextField(control);        
			default:
				return null;
		}
	}

	renderSelect(select){
		const controlState = this.state.params.find((ctl) => ctl.name === select.name);
		return (
			<FormControl fullWidth margin='dense' key={select.name}>
				<InputLabel >{select.label}</InputLabel>
					<Select
						value={controlState.value}
						onChange={this.handleChange}
						inputProps={{name: select.name, id: select.name}}
						renderValue={() => select.options.find((opt) => opt.value === controlState.value).label}	
					>
						{select.options.map((option) =>
							(<MenuItem
								value={option.value}
								key={option.value}>{option.label}
							</MenuItem>)
							)}
					</Select>
			</FormControl>
		)
  }
  
  renderTextField(textField){
    return (
      <Grid item xs={12} key={textField.name}>
        <TextField
          name={textField.name}
          label={textField.label}
          onChange={this.handleChange}
          multiline
          fullWidth
          placeholder='About'
          variant="outlined"
      />
    </Grid>
    )
  }

	renderInput(input){
		const controlState = this.state.params.find((ctl) => ctl.name === input.name);
		return (
			<Grid item xs={6} key={input.name}>
			<FormControl fullWidth>
				<InputLabel>{input.label}</InputLabel>
				<Input 
					value={controlState.value} 
					onChange={this.handleChange} 
					inputProps={{name: input.name, id: input.name}}/>
			</FormControl>
			</Grid>
		)
	}

	renderRadio(radioGroup){
		const controlState = this.state.params.find((ctl) => ctl.name === radioGroup.name);
		return (
			<FormControl key={radioGroup.name}>
				<RadioGroup
					name={radioGroup.name}
					value={String(controlState.value)}
					onChange={this.handleChange}>
						{radioGroup.options.map((option) =>
							(<FormControlLabel
								key={option.value} 
								value={String(option.value)} 
								control={<Radio />} 
								label={option.label}/>))
						}
				</RadioGroup>
			</FormControl>
		)
  }
  
  renderButton(button){

    // const params = this.state.params.filter((param) => (typeof param.name !== undefined && param.name !== null)
    // )

    return (
      <Button 
        variant="contained" 
        key={button.value} 
        onClick={() => this.props.onSubmit(this.state)}>
        {
          button.value
        }
      </Button>
    )
  }

	render() {
		return (
		<Grid className={myStyles.main} container spacing={24}>
			<Paper className={myStyles.paper}>
				{this.props.config.groups.map((group) => this.renderGroup(group))}
			</Paper>
		</Grid>
		)
	}
}

