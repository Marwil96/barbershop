import React, { Component } from 'react';
import '../../App.css';

import Lottie from 'react-lottie';
import animationData from '../../img/animation/data.json'

    class HairAnimation extends Component {
      state = {
        direction: 1
      }
      render() {
         const defaultOptions = {
      loop: false,
      autoplay: false, 
      animationData: animationData,
      direction: -1,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    var height = (window.innerHeight/100) * 40;
    console.log(this.props.animationStep, "HairAnimation", height)
        return (
          <Lottie options={defaultOptions}
              height={height}
              width={229}
              speed={0.25}
              eventListeners={
            [
              {
                eventName: 'segmentStart',
                callback: () => console.log('the animation completed:'),
                  },
                ]
              }
              segments={[this.props.animationStep]}
              direction={this.props.direction}
              // isStopped={animation}
              // isPaused={this.state.isPaused}
            />
          )
      }
    }
export default HairAnimation;