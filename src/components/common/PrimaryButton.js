import React, { Component } from 'react';

const PrimaryButton = ({label, width, onClick}) => {
    return (
     <button onClick={onClick} className={"bg-orange-dark rounded py-3 px-3 font-sans font-bold text-xl text-white " + width}> {label} </button>
    );
  }

export default PrimaryButton;
