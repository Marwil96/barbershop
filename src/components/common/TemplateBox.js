import React, { Component } from 'react';

const TemplateBox = ({}) => {
    return (
     <div className="w-3/12 flex flex-col items-center justify-center bg-white shadow p-2 rounded">
        <div className="w-24 h-24 mb-3 rounded bg-red"> </div>
        <h3 className="font-medium text-xl text-center mb-1"> Elegante </h3>
        <span className="text-center text-sm"> The best template if you want an classy oldschool style on your booking page </span>
     </div>
    );
  }

export default TemplateBox;
