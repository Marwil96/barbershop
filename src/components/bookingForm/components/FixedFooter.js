import React, { Component } from 'react';
import '../App.css';

import ScrollArrow from './common/ScrollArrow';
import ProgressBar from './common/ProgressBar';
import arrow from '../img/blackArrow.svg';

class FixedFooter extends Component {
	state={
		draggedOut:false,
		booked: false,
		barber:this.props.barber,
		style:this.props.style,
		date:"21e Oktober",
		time:"18.00-18.20"
	}

	bookedScreen(booked) {
		console.log("bookedScreen")
		if(booked === true) {
			return(
				<div className="booked"> <h1> Du har nu bokat {this.props.barber} klockan {this.props.time}, {this.props.date} </h1> 
				<a href="http://www.google.com"><div className="backToWebsiteButton">
					<h1> Gå Tillbaka till hemsidan. </h1>
			</div> </a></div>
				)
		}
		else {return}
	}
	dragOutOverview(dragged) {
	console.log("OverView", this.state.barber, this.state.style)
	if(dragged === true) {
	return(
		<div className="overviewContainer"> 
			<img src={arrow} onClick={() => this.setState({draggedOut:false})} />
			<h2> Överblick </h2>
			<p><span>{this.props.barber}</span> kommer utföra <span>{this.props.style}</span> på ditt hår den <span>{this.props.date}, {this.props.time}</span>.<br></br>Stämmer det?</p>
			<div className="overviewButton" onClick={() => this.setState({booked:true})} >
					<h1> Skicka iväg bokningen </h1>
			</div>
		</div>
		)
	}
	else {
		return null
	}
	}
	whatFooter(state) {
		console.log("whatFooter", state)
		if(state === 4) {
			return (
				<div className="fixedFooter fixedButton" onClick={() => this.setState({draggedOut:true})}>
					<h1> Överblicka bokningen </h1>
				</div>
				)
		} else {
			return(
			<div className="fixedFooter"> 
			<ProgressBar progressBar={this.props.progressBar} />
        	<div className="arrowContainer">
	        <ScrollArrow onScrollArrowClick={this.props.onScrollArrowClick} direction={"upp"}/>
	        <ScrollArrow onScrollArrowClick={this.props.onScrollArrowClick} direction={"down"}/>
	        </div>
	        </div>
	        )
		}
	}
render() {
	return (
        <div className="fixedFooter"> 
			<ProgressBar progressBar={this.props.progressBar} />

        	<div className="priceContainer">
		        <div><h3>Est tid</h3><h3>Pris</h3> </div>
		        <div><h2>{this.props.time} min</h2><h2>{this.props.price} kr</h2> </div>
	        </div>
	    </div>
	)
	}
}


export default FixedFooter;