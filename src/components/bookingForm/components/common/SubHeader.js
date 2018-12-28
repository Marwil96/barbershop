import React, { Component } from 'react';
import '../../App.css';

const SubHeader = ({header, color, align}) => (
	<h3 style={SubHeaderStyle}> {header} </h3>
);

const SubHeaderStyle = {
   fontSize: 16,
   width: '74%',
   marginTop: -6,
   fontWeight: 500,
   textAlign: 'center',
   alignSelf: 'center'
}

export default SubHeader;