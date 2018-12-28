import React, { Component } from 'react';
import '../App.css';

import TimeButton from './common/TimeButton';
import InputField from './common/InputField';
import MaterialTextField from './common/MaterialTextField';



class FormContainer extends Component {
	state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

   handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
	render() {
		return (
			<div className="checkoutContainer">
				<div className="checkoutButtonContainer"> 
					<div className="checkoutButton" onClick= {() => this.setState({checkoutMethod:"book"})} > Betala på plats </div>
					<div className="checkoutButton" onClick= {() => this.setState({checkoutMethod:"pay"})} > Betala direkt </div>
				</div>

				{this.renderPayment(this.state.checkoutMethod)}
			</div>
		)
		}
	}	

export default FormContainer;