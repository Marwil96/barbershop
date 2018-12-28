import React, { Component } from 'react';
import '../../App.css';

const Header = ({header, color, align}) => (
	<h1 className={"header " + align} style={{color: color}}> {header} </h1>
);

export default Header;