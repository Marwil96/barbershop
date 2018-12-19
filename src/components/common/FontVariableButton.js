import React, { Component } from 'react';

const FontVariableButton = ({label, onClick, font}) => {
    return (
     <div onClick={() => { onClick(font)}} className="p-4 cursor-pointer mr-2 rounded shadow flex justify-center items-center">
	     <span className={"font-medium text-center " + font}>
	     	{label}
	     </span> 
     </div>
    );
  }

export default FontVariableButton;
