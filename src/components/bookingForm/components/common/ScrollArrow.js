import React, { Component } from 'react';
import '../../App.css';
import arrow from '../../img/arrow.svg';

const ScrollArrow = ({direction, onScrollArrowClick}) => (
	<div className="scrollArrow" onClick={() => onScrollArrowClick(direction)}> 
        <img className={"scrollArrow"+direction} src={arrow} />
    </div>
);

export default ScrollArrow;