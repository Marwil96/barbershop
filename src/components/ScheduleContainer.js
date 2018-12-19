import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

import moment from 'moment';
import { logInAction } from '../actions/authActions';

import {InputField, PrimaryButton} from './common/index.js';


class ScheduleContainer extends Component {
  state = {
    primaryColor:'#f6993f',
  }
  render() {
    return (
      <div className="container h-screen flex flex-col justify-center bg-grey-lighter">
        <div className="p-12 h-screen flex flex-col bg-white">
          <div className="h-64 absolute ml-64 pin-r pin-l pin-t z-0" style={{backgroundColor: this.state.primaryColor}}> </div>
          <h1 className={"text-white z-50 " + this.state.primaryFont}> Settings </h1>
          <span className="mt-2 text-white z-40"> Step 2/4 </span>
          <span className="mt-12 mb-2 font-semibold uppercase z-40 text-white"> Calendar </span>
        <div className="w-auto h-auto pb-4 pt-4 px-4 flex flex-col rounded bg-white shadow z-40">
          <div className="mt-4"> <PrimaryButton label={"Update"} onClick={() => { this.changeFormState(3)}} width={"w-auto"}/> </div>
        </div>
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
  const { loading } = auth;

  return { loading };
};
export default connect(mapStateToProps, {})(ScheduleContainer);

