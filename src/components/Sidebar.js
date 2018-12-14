import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { logInAction } from '../actions/authActions';
import { Link } from "react-router-dom";

import {InputField, PrimaryButton} from './common/index.js';

class Sidebar extends Component {
  state = {
  }
  render() {
    return (
      <div className="h-screen w-64 absolute flex flex-col items-center bg-indigo-lightest border-r">
        <Link to="/dashboard" className="w-full pl-4 pt-6 flex items-center">
          <div className="w-10 h-10 bg-blue flex items-center justify-center" style={{borderRadius:'100%'}}>
           <span className="text-base font-bold text-white uppercase">WM</span>
          </div>
          <span className="text-xl ml-2">Dandysklipperi</span>
        </Link>
        <div className="flex flex-col w-full pl-4 pt-6"> 
          <span className="py-4"> Customize bookingform </span>
          <Link to="/schedule" className="py-4"> Time management </Link>
          <span className="py-4"> Options </span>    
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//  logInAction: () => dispatch(logInAction())
// })

// const mapStateToProps = state => ({
//  ...state
// })

const mapStateToProps = ({ auth }) => {
  const { loading, fullName } = auth;

  return { loading, fullName };
};
export default connect(mapStateToProps, {})(Sidebar);

