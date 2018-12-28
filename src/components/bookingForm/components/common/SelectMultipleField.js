import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
     width: '100%!important',
    marginLeft: 0,
    marginRight: '0!important',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


class SelectMultipleField extends React.Component {
  state = {
    name: [],
  };

  handleChange = event => {
    console.log("SelectMultipleField", event.target.value)
    this.setState({ name: event.target.value });
  };
  addToArray(value){
    console.log("componentWillMount", value)
    this.state.name.push(...value);
  }
  render() {
    const { classes } = this.props;
    this.addToArray(this.props.value);
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="select-multiple">Behandling</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<FilledInput id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {this.props.data.map(options => (
              <MenuItem key={options.value} value={options.value}>
                {options.value}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
      </div>
    );
  }
}

SelectMultipleField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SelectMultipleField);