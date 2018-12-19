import React, { Component } from 'react';

const InputField = ({onChange, label, value, placeholder}) => {
    return (
      <div className="flex flex-col mx-1 w-full">
      	<label className="block font-medium text-sm mb-2 my-2"> {label} </label>
     	<input onChange={onChange} value={value} className="w-full block bg-grey-lighter rounded h-12 focus:shadow-focus focus:shadow outline-none p-3 mb-2" type="text" placeholder={placeholder}/>
      </div>
    );
  }

export default InputField;
