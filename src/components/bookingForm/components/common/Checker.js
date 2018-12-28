import React, { Component } from 'react';
import '../../App.css';

import Lottie from 'react-lottie';
import animationData from '../../img/animation/checkedDone.json'

  const defaultOptions = {
      loop: false,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const Checker = ({animation, whatAnimation, opacity}) => (
   	<div className={"checkerAnimationContainer " + whatAnimation} style={{opacity:opacity}}> 
   		<Lottie options={defaultOptions}
              height={100}
              width={35}
              isStopped={animation}
              // isPaused={this.state.isPaused}
              />
    </div>
);

export default Checker;