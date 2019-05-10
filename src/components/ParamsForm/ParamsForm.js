import React, { Component } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from '@material-ui/core/Input';
import Select from "@material-ui/core/Select";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControl';
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
		return <div key={group.name}>
					<div>{group.name}</div>
					{group.controls.map((control) => this.renderControl(control))}
				</div>;
	}

	renderControl(control){
		switch (control.type) {
			case 'select':
				return this.renderSelect(control);
			case 'input':
				return this.renderInput(control);
			case 'radio':
				return this.renderRadio(control);
			default:
				return null;
		}
	}

	renderSelect(select){
		const controlState = this.state.params.find((ctl) => ctl.name === select.name);

		return (
			<FormControl key={select.name}>
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

	renderInput(input){
		const controlState = this.state.params.find((ctl) => ctl.name === input.name);
		return (
			<FormControl>
				<InputLabel>{input.label}</InputLabel>
				<Input 
					value={controlState.value} 
					onChange={this.handleChange} 
					inputProps={{name: input.name, id: input.name}}/>
			</FormControl>
		)
	}

	renderRadio(radioGroup){
		const controlState = this.state.params.find((ctl) => ctl.name === radioGroup.name);
		return (
			<FormControl key={radioGroup.name}>
				<RadioGroup
					name={radioGroup.name}
					value={controlState.value}
					onChange={this.handleChange}>
						{radioGroup.options.map((option) =>
							(<FormControlLabel value={option.value} control={<Radio/>} label={option.label}/>))
						}
				</RadioGroup>
			</FormControl>
		)
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

