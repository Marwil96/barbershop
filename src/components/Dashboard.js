import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { logInAction } from '../actions/authActions';

import {InputField, PrimaryButton} from './common/index.js';

class Dashboard extends Component {
  state = {
  }
  render() {
    return (
      <div className="container h-screen flex flex-col items-center justify-center bg-grey-lighter">
        <h1> DASHBOARD </h1>
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
export default connect(mapStateToProps, {})(Dashboard);

