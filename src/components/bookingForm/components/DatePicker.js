import React, { Component } from 'react';
import '../App.css';

import Date from './common/Date';
import ProgressBar from './common/ProgressBar';

const DatePicker = ({img, cardHeader, cardSubheader}) => (
	<div className="datePicker">
		<h3 className="datePickerMonth"> Okt 2018 </h3> 
        <Date date={"2"} day={"Sun"} />
        <Date date={"3"} day={"Mon"}  />
        <Date date={"4"} day={"Tue"}  />
        <Date date={"5"} day={"Wed"} dateState={"activeDate"} />
        <Date date={"6"} day={"Thu"}  />
        <Date date={"7"} day={"Fri"}  />
        <Date date={"8"} day={"Sat"}  />
    </div>
);

export default DatePicker;