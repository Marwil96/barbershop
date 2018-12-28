import React, { Component } from 'react';
import '../../App.css';


const ProgressBar = ({progressBar}) => (
	<div className="progressBarContainer">
		<div className="progressBar"> 
	    	<div className="innerProgressBar" style={{width:progressBar+"%"}}> </div>
	    </div>
	    <h3> {Math.floor(progressBar)}% </h3>
    </div>
);

export default ProgressBar;