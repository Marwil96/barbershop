import React, { Component } from 'react';

const PrimaryButton = ({label, width, onClick}) => {
    return (
     <div className="width-12/12 flex-col">
            <div className="width-12/12 flex justify-center bg-red"> Feburari 12th </div>
            <div className="width-12/12 flex justify-center bg-red">  
              <div className="w-2/12"></div>
              <div className="w-1/12">8</div>
              <div className="w-1/12">9</div>
              <div className="w-1/12">10</div>
              <div className="w-1/12">11</div>
              <div className="w-1/12">12</div>
              <div className="w-1/12">13</div>
              <div className="w-1/12">14</div>
              <div className="w-1/12">15</div>
              <div className="w-1/12">16</div>
              <div className="w-1/12">17</div>
            </div>  
            <div className="w-12/12 h-12 border flex"> 
              <div className="w-2/12 border-r bg-green flex justify-center items-center text-center"> William Martinsson </div>
              <div className="w-10/12 bg-blue"> 
                <div className="h-12 bg-orange" style={{width:"calc(1/12 * 100%/60*30)"}}> 30min </div>
              </div>
            </div>
          </div>
    );
  }

export default PrimaryButton;
