import React, { Component } from 'react';
import '../../App.css';


const Date = ({date, day, dateState}) => (
   	<div className={"date " + dateState}> 
       	<h1>{date}</h1>
      	<h3>{day}</h3>
    </div>
);

export default Date;