import React, { Component } from 'react';

const PrimaryButton = ({label}) => {
    return (
     <button className="bg-orange-dark rounded w-full h-12 font-sans font-bold text-xl text-white"> {label} </button>
    );
  }

export default PrimaryButton;
