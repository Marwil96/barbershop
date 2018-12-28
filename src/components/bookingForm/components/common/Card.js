import React, { Component } from 'react';
import '../../App.css';

import Checker from './Checker.js'

import damKlippning from '../../img/damklippning.svg';
import shaving from '../../img/razor.svg';
import permentering from '../../img/wigs.svg';
import herrKlippning from '../../img/scissors.svg';
import hairWash from '../../img/hairwashing.svg';
import womentreatment from '../../img/women-treatment.svg'


class Card extends Component {
	state = {
	animation:true,
	opacity: 0,
	cardActivated: false
}
opacityChanger(animation) {
if(animation === true) {
	this.setState({ opacity: 1})
}else {
	this.setState({opacity:0})
}}
	render() {
		return(
		<div className={this.props.whatStyle + " " + this.props.imageTrue} onClick={() => { this.props.onClick(this.props.whatStyle, this.props.cardHeader, this.state.cardActivated, this.props.price, this.props.time); this.setState({animation:!this.state.animation, cardActivated: !this.state.cardActivated}); this.opacityChanger(this.state.animation)}}> 
        	<img src={this.props.img} />
        	<h2>{this.props.cardHeader}</h2>
        	<h3>{this.props.cardSubheader}</h3>
        	<Checker animation={this.state.animation} opacity={this.state.opacity} />
        </div>
			)
	}
}
export default Card;