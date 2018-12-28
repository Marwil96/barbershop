import React, { Component } from 'react';
import '../App.css';

import TimeButton from './common/TimeButton';
import InputField from '../../common/InputField';
import DisabledInputField from './common/DisabledInputField';
import MaterialTextField from './common/MaterialTextField';
import SelectMultipleField from './common/SelectMultipleField';



class CheckoutContainerVersion extends Component {
	
	state = {
			checkoutMethod:null,
			term: ""
		}
		 onInputChange(event) {
		 	console.log(event);
		 	this.setState({
		 		term: event
		 	})
        	if(event.length > 1) {
        		// this.props.onClick("checkoutContainer",event)
        	} else if(event.length === 0){
        		console.log("inanförIFstate",this.state);
        		this.props.onClick("removeCheckoutContainer", this.state.term)
        	}

    	}
    	onInputSubmit(e) {
    		e.preventDefault();		
    		var term = this.state.term;
    		console.log(term)
    		if(term.length > 1) {
        		this.props.onClick("checkoutContainer",term)
        	} else if(term.length === 0){
        		this.props.onClick("removeCheckoutContainer",term)
        	}
		 	console.log("ONSUBMIT");
    	}	
		render() {
		return (
			<div className="checkoutContainer">
				<div className="formContainer">
						<form onSubmit={this.onInputSubmit} > 
							<h3> Kontakt Uppgifter </h3>
							<InputField value="" id="filled-name" onInputChange={this.onInputChange.bind(this)} label="Namn" onBlur={this.onInputSubmit.bind(this)} disabled={false} type="text" />	
							<InputField value="" id="filled-name" onInputChange={this.onInputChange.bind(this)} label="Email" onBlur={this.onInputSubmit.bind(this)} disabled={false} type="email" />	
							<h3> Överblick bokning </h3>
							<MaterialTextField data={this.props.barbers} label="Frisör" value={this.props.savedBarber}/>
							<SelectMultipleField data={this.props.style} label="Frisör" value={this.props.savedStyle}  />
							<DisabledInputField value={this.props.date} label="Datum" disabled={true} id="filled-disabled"/>										
						</form>
						<div className="formButton" onClick={() => this.props.onButtonClick(true)}> Skicka in bokningen </div>	
					</div>
			</div>
		)
		}
	}	

export default CheckoutContainerVersion;