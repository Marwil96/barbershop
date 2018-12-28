import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

	const styles = theme => ({
	  container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  textField: {
	    marginLeft: theme.spacing.unit,
	    marginRight: theme.spacing.unit,
	    color: "white",
	     width: "100%"
	  },
	  dense: {
	    marginTop: 16,
	  },
	  menu: {
	    width: 200,
	  },
	});

class InputField extends Component {
	state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    value: ""
  };

   handleChange (event) {
    this.setState({
      value: event,
    });
  };
render() {
	const classes = this.props;

	return(
		<TextField
		id={this.props.id}
		required
		type={this.props.type}
		autoComplete={this.props.type}
		label={this.props.label}
		className={classes.textField}
		// value={this.state.value}
		onChange={event => this.handleChange(event.target.value)}
		margin="normal"
		variant="filled"
	/>
		)
}
}


export default InputField;