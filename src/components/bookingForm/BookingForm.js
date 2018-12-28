import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import dateFns from "date-fns";
import Lottie from 'react-lottie';

import animationData from './img/animation/confetti.json'
import johannaDahl from './img/barbers/johannaDahl.jpg';
import peterFiskare from './img/barbers/peterFiskare.jpg';
import kajsaJonsson from './img/barbers/kajsaJonsson.jpg';
import hannaPetterson from './img/barbers/hannaPetterson.jpeg';
import johanKarlsson from './img/barbers/johanKarlsson.jpg';
import margaretaKaj from './img/barbers/margaretaKaj.jpg';


import damklippning from './img/damklippning.svg';
import damKlippning from './img/curl.svg';
import washing from './img/damklippning.svg';
import shaving from './img/razor.svg';
import colouring from './img/paint-bucket.svg';
import herrKlippning from './img/hairstyle.svg';
import hairWash from './img/hairwashing.svg';
import styling from './img/mirror.svg';
import scissors from './img/scissors.svg';
import permentering from './img/women-treatment.svg'

import Header from './components/common/Header';
import SubHeader from './components/common/SubHeader';
import CardContainer from './components/CardContainer';
import Card from './components/common/Card';
import StepSlider from './components/common/StepSlider';
import FixedFooter from './components/FixedFooter';
import DatePicker from './components/DatePicker';
import TimeContainer from './components/TimeContainer';
import Calendar from './components/Calendar';
import CheckoutContainerVersion from './components/CheckoutContainerVersion';
import HairAnimation from './components/common/HairAnimation.js';

  const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 var array = []
 var completePrice = 0
 var completeTime = 0

class BookingForm extends Component {
  constructor() {
    super();
     this.state = {
      priceDiffrence: 1,  
      styleCard: [
      {style:"Vanlig klippning", cardSubheader:(370), estimatedTime:(30), img:scissors, value:"Vanlig klippning" },
      {style:"Tvätt & Föning", cardSubheader:(190), estimatedTime:(15), img:washing, value:"Tvätt & Föning"  },
      {style:"Permanenta", cardSubheader:(420), estimatedTime:(45), img:damKlippning, value:"Permentera"},
      {style:"Rakning", cardSubheader:(140), estimatedTime:(15), img:shaving, value:"Rakning" },
      {style:"Styling", cardSubheader:(200), estimatedTime:(15), img:styling, value:"Styling" },
      {style:"Färga håret", cardSubheader:(599), estimatedTime:(60), img:colouring, value:"Färga håret" }
      ],
      potraitCard: [
      {name:"Spelar ingen roll", img:johannaDahl, image:" noImage", value:"Johanna Dahl"},
      {name:"Peter Fiskare", img:peterFiskare, value:"Peter Fiskare"},
      {name:"Kajsa Jonsson", img:kajsaJonsson, value:"Kajsa Jonsson"},
      {name:"Hanna Petterson", img:hannaPetterson, value:"Hanna Petterson" },
      {name:"Johan Karlsson", img:johanKarlsson, value:"Johan Karlsson" },
      {name:"Margaretha Kaj", img:margaretaKaj, value:"Margaretha Kaj"}
      ],
      selectedDate: new Date(),
      displayedDate: dateFns.format(new Date(),
  'dddd, MMMM Do'),
      progressBar: 0,
      savedStyle: [],
      savedBarber: "Undefined",
      whatState: 0,
      pickedTime:" 12.00 - 12.20" ,
      pickedBarber:false,
      pickedStyle:false,
      pickedDate:false,
      pickedMail:false,
      booked:"booked",
      hairAnimationPhrase:"Kort hår",
      direction:1,
      price: 0,
      time: 0
  };
    this.onCardClick = this.onCardClick.bind(this);
  }

    onDateClick = day => {
      console.log("onDateClick", dateFns.format(this.state.selectedDate,
  'dddd, MMMM Do'))
     this.setState({
      selectedDate: day,
      displayedDate: dateFns.format(day,
  'dddd, MMMM Do')
    });
  };

  onCardClick(whatStyle, cardHeader, cardActivated, price, time){
    if(whatStyle === "card") {
      if(this.state.pickedStyle === false) {
        array.push(cardHeader)
        completePrice = completePrice + price
        completeTime = completeTime + time
        console.log("Price", this.state.time, time)
        this.setState({
        savedStyle: array,
        progressBar: (this.state.progressBar + 33.733),
        whatState: (this.state.whatState + 1),
        pickedStyle:true,
        price: completePrice,
        time: completeTime
      })
    } else if(cardActivated === true) {
      console.log("Tar bort del ur array", cardHeader, array)
       completePrice = completePrice - price
      completeTime = completeTime - time
     array = array.filter(item => !cardHeader.includes(item))
     console.log("Tagit bort del ur array", cardHeader, array)
      this.setState({
        savedStyle: array,
        pickedStyle:true,
        price: completePrice,
        time:completeTime 
      })
    }
    else {
      array.push(cardHeader)
      completePrice = completePrice + price
      completeTime = completeTime + time
      console.log("Price", this.state.time, time)
      this.setState({
        savedStyle: array,
        price: completePrice,
        time:completeTime
      })
    }
    // const myDomNode = ReactDOM.findDOMNode(this.refs.chooseBarber)
    // myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } else if(whatStyle === "timeButton") {
      if(this.state.pickedDate === false) {
        this.setState({
          progressBar: (this.state.progressBar + 33.633),
          pickeTime: cardHeader,
          whatState: (this.state.whatState + 1),
          pickedDate:true
        })
      }else {
        this.setState({
          pickeTime: cardHeader
        })
      }
    const myDomNode = ReactDOM.findDOMNode(this.refs.choosePayment)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } 
  else if(whatStyle === "checkoutContainer") {
    console.log("CHECKOUT")
    if(this.state.whatState >= 4){
      console.log(this.state.whatState, "STATE => 4")
      this.setState({
      whatState: 4,
      pickedMail:true
    })
    }else {
      this.setState({
      progressBar: (this.state.progressBar + 33.533),
      whatState: (this.state.whatState + 1),
      pickedMail:true
    })
    }
  } else if(this.state.pickedMail === true) {
    this.setState({
      progressBar: (this.state.progressBar - 33.533),
      whatState: (this.state.whatState - 1),
      pickedMail:false
    })
  }
  else if(whatStyle === "onCalenderClick") {
    // const myDomNode = ReactDOM.findDOMNode(this.refs.chooseClock)
    // myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  else {
    if(this.state.pickedBarber === false) {
    console.log("WhatBarber", cardHeader)
    this.setState({
      savedBarber: cardHeader,
      progressBar: (this.state.progressBar + 33),
      whatState: (this.state.whatState + 1),
      pickedBarber:true
    })
  }else {
    this.setState({
      savedBarber: cardHeader
    })
  }
    // const myDomNode = ReactDOM.findDOMNode(this.refs.chooseTime)
    // myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
  }

  onScrollArrowClick(direction) {
    console.log("onScrollArrowClick", window.innerHeight, window.pageYOffset, (window.pageYOffset - 200));
    var ScrollHeight = window.pageYOffset;
    if(direction === "upp") {
    window.scroll({top: ScrollHeight - 700, behavior: "smooth", block: "end", inline: "nearest"})
    }  else {
      window.scroll({top: ScrollHeight + 700, behavior: "smooth", block: "end", inline: "nearest"})
    }
  }
  onBookedButtonClick(booked){
      this.setState({booked:booked})
      console.log("onBokkedCLick",this.state.booked)
    }

  renderBookedScreen(booked){
    if(booked === true) {
      setTimeout(() => {
        this.setState({ isPaused: true });
      }, 3800);
      return (
        <div className="booked"> 
          <div className="animationContainer">
          <Lottie options={defaultOptions}
              height={1200}
              width={800}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/> </div>
              <h1> Grattis du har nu bokat en tid hos Bea & Ida </h1>
        </div>)
    } else {
      return null
    }
  }
  onSlide(step, phrase, priceDiffrence, direction) {
    console.log(step)
    this.setState({
      hairAnimationStep: step,
      hairAnimationPhrase: phrase,
      priceDiffrence: priceDiffrence,
      direction: direction
    })
  }

  render() {
    console.log(this.state.selectedDate)
    var completeDate = (this.state.displayedDate + " " + this.state.pickeTime)
    console.log(this.state.displayedDate, this.state.pickeTime)
    return (
      <div className="App">
        {this.renderBookedScreen(this.state.booked)}
        <FixedFooter progressBar={this.state.progressBar} onScrollArrowClick={this.onScrollArrowClick} state={this.state.whatState} barber={this.state.savedBarber} style={this.state.savedStyle} date={this.state.displayedDate} pickeTime={this.state.pickeTime} price={this.state.price} time={this.state.time}/>
        
        <div className="sectionContainer chooseHairLength"> 
          <Header header={"1. Välj vilken hårlängd du har."} /> 
          <SubHeader header={"Dra i sliden för att visa hur långt hår du har."} />
          <HairAnimation animationStep={this.state.hairAnimationStep} direction={this.state.direction} />
          <h3 className="sliderHeader"> {this.state.hairAnimationPhrase} </h3>
          <StepSlider onSlide={this.onSlide.bind(this)} />
        </div>

        <div className="sectionContainer chooseStyle"> 
          <Header header={"2. Vilken typ av klippning vill du ha?"} /> 
          <SubHeader header={"Välj en eller flera behandlingar."} />
          <CardContainer data={this.state.styleCard} cardHeader={"Damklippning"} cardSubheader={"360kr/30min"} priceDiffrence={this.state.priceDiffrence} img={damklippning} whatStyle="card" onClick={this.onCardClick} />
        </div>
        
        <div className="sectionContainer chooseBarber" ref={ "chooseBarber" }> 
          <Header header={"3.Vem vill du ska klippa dig?"} color="white"/> 
          <CardContainer data={this.state.potraitCard} img={johannaDahl} whatStyle="card potraitCard" onClick={this.onCardClick} /> 
        </div>

        <div className="sectionContainer chooseDate" ref={ "chooseTime" }> 
          <Header header={"4.När vill du klippa dig?"} color="white"/> 
          <Calendar selectedDate={this.state.selectedDate} onDateClick={this.onDateClick} scrollDown={this.onCardClick} />
          <Header header={this.state.displayedDate} color="white" align="headerCenter"/>
          <TimeContainer selectedDate={dateFns.format(this.state.selectedDate,'DDDD')} ref={ "chooseClock" } onClick={this.onCardClick}/>        
        </div>

        <div className="sectionContainer choosePayment" ref={ "choosePayment" }> 
          <Header header={"Slutför bokningen"} /> 
          <CheckoutContainerVersion onClick={this.onCardClick} style={this.state.styleCard} barbers={this.state.potraitCard} date={completeDate} savedBarber={this.state.savedBarber} savedStyle={this.state.savedStyle} onButtonClick={this.onBookedButtonClick.bind(this)} />       
        </div>
      </div>
    );
  }
}

export default BookingForm;
