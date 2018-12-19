import React, { Component } from 'react';

const EmployeeBox = ({onClick, data}) => {
    return (
     <div onClick={() => { onClick(data)}} className="cursor-pointer w-32 h-32 mr-3 flex flex-col justify-center items-center shadow rounded"> 
        <span className="text-center"> 
          {data.name}
        </span> 
      </div>
    );
  }

export default EmployeeBox;
