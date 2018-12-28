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
	const currencies = [
	  {
	    value: 'USD',
	    label: '$',
	  },
	  {
	    value: 'EUR',
	    label: '€',
	  },
	  {
	    value: 'BTC',
	    label: '฿',
	  },
	  {
	    value: 'JPY',
	    label: '¥',
	  },
	];

class MaterialTextField extends Component {
	state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    value: this.props.value,
  };

   handleChange = name => event => {
    this.setState({
      value: event.target.value,
    });
  };
render() {
	const classes = this.props;
	const whatKind = this.props.whatKind;
	console.log("MENUITEMS INPUTFIELD", this.state.value)
	return(
		<TextField
          id="filled-select-currency"
          disabled={this.props.disabled}
          select
          label={this.props.label}
          className={classes.textField}
          value={this.props.value}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="filled"
        >
          {this.props.data.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
		)
}
}


export default MaterialTextField;