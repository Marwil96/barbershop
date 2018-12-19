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
      <div className="h-screen w-64 fixed flex flex-col items-center bg-white shadow">
        <Link to={"/" +this.props.user+ "/dashboard"} className="w-full pl-4 pt-6 flex items-center">
          <div className="w-10 h-10 bg-blue flex items-center justify-center" style={{borderRadius:'100%'}}>
           <span className="text-base font-bold text-white uppercase">WM</span>
          </div>
          <span className="text-xl ml-2">Dandysklipperi</span>
        </Link>
        <div className="flex flex-col w-full pl-4 pt-6"> 
          <Link to={"/" + this.props.user + "/workspace"} className="py-4"> Workspace </Link>
          <Link to={"/" + this.props.user + "/schedule"} className="py-4"> Time management </Link>
          <Link to={"/" + this.props.user + "/teamSettings"} className="py-4"> Team settings </Link>
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
  const { loading, fullName, user } = auth;

  return { loading, fullName, user };
};
export default connect(mapStateToProps, {})(Sidebar);

