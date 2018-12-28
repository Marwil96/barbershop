
import React, { Component } from 'react';
import dateFns from "date-fns";
import "../App.css";

class Calendar extends Component {
	state = {
    	currentMonth: new Date(),
    	selectedDate: this.props.selectedDate,
    	availableDates: [28,29,30],
    	almostAvailableDates: [24,25,26],
      freetimes: {
        301: ["11.20 - 11.40"],
        302: ["11.20 - 11.40", "11.40 - 12.00"],
        303: ["11.20 - 11.40", "11.40 - 12.00"],
        304: ["11.20 - 11.40", "11.40 - 12.00"],
        305: ["11.20 - 11.40", "11.40 - 12.00"],
        306: ["11.20 - 11.40"],
        307: ["11.20 - 11.40"],
        308: ["11.20 - 11.40"],
        309: ["11.20 - 11.40", "11.40 - 12.00"],
        310: ["11.20 - 11.40", "11.40 - 12.00"],
        311: ["11.20 - 11.40", "11.40 - 12.00"],
        312: ["11.20 - 11.40", "11.40 - 12.00"],
        313: ["11.20 - 11.40", "11.40 - 12.00"],
        314: ["11.20 - 11.40", "11.40 - 12.00"],
        315: ["11.20 - 11.40", "11.40 - 12.00"],
        316: ["11.20 - 11.40", "11.40 - 12.00"],
        317: ["11.20 - 11.40", "11.40 - 12.00"],
        318: ["11.20 - 11.40", "11.40 - 12.00"],
        319: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        320: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        321: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        322: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        323: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        324: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        325: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        326: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        327: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        328: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        329: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        330: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        331: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        332: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        333: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        334: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        335: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        336: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        337: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        338: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        339: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        340: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        341: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
        342: ["11.20 - 11.40", "11.40 - 12.00", "12.40 - 13.00"],
      }

	};

	  renderHeader() {
	  	const dateFormat = "MMMM YYYY";
		  return (
		    <div className="header row flex-middle">
		      <div className="col col-start">
		        <div className="icon" onClick={this.prevMonth}>
		          chevron_left
		        </div>
		      </div>
		      <div className="col col-center">
		        <span>
		          {dateFns.format(this.state.currentMonth, dateFormat)}
		        </span>
		      </div>
		      <div className="col col-end" onClick={this.nextMonth}>
		        <div className="icon">chevron_right</div>
		      </div>
		    </div>
		  );
	  }

  renderDays() {
  const dateFormat = "ddd";
  const days = [];
  let startDate = dateFns.startOfWeek(this.state.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className="days row">{days}</div>;
}

  renderCells() {
  	const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D"; 
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
        // console.log("renderCells", this.state.freetimes[301].length);
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        // console.log("renderCells",this.state.freetimes[dateFns.format(cloneDay, 'DDDD')].length);
        if(this.state.freetimes[dateFns.format(cloneDay, 'DDDD')] === undefined) {
          var style= "number ";
          var bgColor ="col cell bgRed ";
        }else {
        if(this.state.freetimes[dateFns.format(cloneDay, 'DDDD')].length > 2) {
          // console.log("LEDIGT")
        	var style = "number numberGreen";
        	var bgColor ="col cell bgGreen ";
        } else if(this.state.freetimes[dateFns.format(cloneDay, 'DDDD')].length === 2) {
          // console.log("LITE LEDIGT")
        	var style= "number";
        	var bgColor ="col cell bgYellow ";
        }	else {
          // console.log("Upptaget")
        	var style= "number ";
        	var bgColor ="col cell bgRed ";
        }
        }
        // console.log("renderCells",dateFns.format(cloneDay, 'DDDD'), this.state.freetimes);
        days.push(
          <div
            className={bgColor + `col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, this.props.selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.props.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className={style} onClick={() => this.props.scrollDown("onCalenderClick")}>{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  // onDateClick = day => {
  // 	 this.setState({
  //     selectedDate: day
  //   });
  // };

  nextMonth = () => {
  this.setState({
    currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
  });
	};

	prevMonth = () => {
	  this.setState({
	    currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
	  });
	};

  render() {
    return (
     <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        <div> 
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#00DFAD"}}> </div><h3 className="textInstruction"> Många lediga tider </h3> </div>
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#F3B02E"}}> </div><h3 className="textInstruction"> Många Upptagna tider </h3> </div>
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#E74C3C"}}> </div><h3 className="textInstruction"> Fullbokat </h3> </div>
        </div>
     </div>
    );
  }
}

export default Calendar;