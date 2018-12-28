import React, { Component } from 'react';
import '../../App.css';
import Checker from './Checker.js'


class TimeButton extends Component { 
	state = {
	animation:true,
	opacity: 0
}
opacityChanger(animation) {
if(animation === true) {
	this.setState({ opacity: 1})
}else {
	this.setState({opacity:0})
}}
	render() {
		return (
			<div className="timeButton" onClick={() => {this.props.onClick("timeButton", this.props.time); this.setState({animation:!this.state.animation}); this.opacityChanger(this.state.animation)}}>
				<h1> {this.props.time} </h1>
				<Checker animation={this.state.animation} whatAnimation="checkerTimeButton" opacity={this.state.opacity} />
		    </div>
			)
	}
}

export default TimeButton;