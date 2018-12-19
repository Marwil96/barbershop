import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import moment from 'moment';
import { logInAction, signUp } from '../actions/authActions';

import {InputField, PrimaryButton} from './common/index.js';

class SignInContainer extends Component {
  state = {
    email:'example@example.com',
    password:'password',
    loginState: true 
  }
  componentWillMount() {
    console.log(moment().year())
  }
  passwordChange(event) {
      console.log(event.target.value)
      this.setState({
        password:event.target.value
      })
    }
  emailChange(event) {
    console.log(event.target.value)
      this.setState({
        email:event.target.value
      })
  }
   teamNameChange(event) {
    console.log(event.target.value)
      this.setState({
        teamName:event.target.value
      })
    }
  lastNameChange(event) {
    console.log(event.target.value)
      this.setState({
        lastName:event.target.value
      })
  }
  firstNameChange(event) {
    console.log(event.target.value)
      this.setState({
        firstName:event.target.value
      })
  }
  submitForm(event){
    var { password, email, loginState, firstName, lastName, teamName } = this.state;
    var fullName = firstName + ' ' + lastName;
    console.log("SubmitForm Event", password);
    if(loginState) {
    this.props.logInAction(email, password);
  } else if(loginState === false) {
    this.props.signUp(email, password, fullName, teamName);
  }
  event.preventDefault();
  } 
  loadingSpinner(loading) {
    if(loading) {
      return <h1>Loading</h1>
    } else return null
  }
  changeFormButton() {
     if(this.state.loginState) {
      this.setState({
        loginState:false
      })} else {
        this.setState({
        loginState:true
      })
     }
   }
  changeForm(state) {
    if(state === false) {
     return <span className="mt-6 text-white opacity-75 text-lg">Already a member?  <span onClick={this.changeFormButton.bind(this)} className="cursor-pointer underline">Log in</span></span>
    } else {
     return <span className="mt-6 text-white opacity-75 text-lg">Have no account? <span onClick={this.changeFormButton.bind(this)} className="cursor-pointer underline">Signup</span></span>
    }
  }

  whatForm(state) {
    if(state) {
      // Login form
      return (
        <form className="text-black w-1/4 rounded pt-12 bg-white flex flex-col space-between" onSubmit={this.submitForm.bind(this)}>
          <h3 className="text-black text-2xl text-center">Login!</h3> 
          <div className="px-4 mb-4"> 
            <InputField onChange={this.emailChange.bind(this)} value={this.state.email} label="Email" placeholder="email"/>
            <InputField onChange={this.passwordChange.bind(this)} value={this.state.password} label="Password" placeholder="password"/>
          </div>
          <PrimaryButton label={"Login"} width={"w-full"}/> 
        </form>
        )} else if(state === false) {
        // Signup form
        return (
          <form className="text-black w-1/4 rounded pt-12 bg-white flex flex-col space-between" onSubmit={this.submitForm.bind(this)}>
          <h3 className="text-black text-2xl mb-6 text-center">Signup Today!</h3> 
          <div className="px-4 mb-4">   
            <div className="flex space-between"> 
              <InputField onChange={this.firstNameChange.bind(this)} value={this.state.firstName} label="First Name"/>
              <InputField onChange={this.lastNameChange.bind(this)} value={this.state.lastName} label="Last Name"/>
            </div>  
            <InputField onChange={this.teamNameChange.bind(this)} value={this.state.teamName} label="Namn på frisörsalongen" placeholder="Frisörsalongens namn"/>
            <InputField onChange={this.emailChange.bind(this)} value={this.state.email} label="Email" placeholder="email"/>
            <InputField onChange={this.passwordChange.bind(this)} value={this.state.password} label="Password" placeholder="password"/>
          </div>
          <PrimaryButton label={"Signup"} width={"w-full"}/> 
          </form>
          )
      }
  }
  render() {
    return (
      <div className="container h-screen flex flex-col items-center justify-center bg-blue-darker">
      {this.whatForm(this.state.loginState)}
      {this.changeForm(this.state.loginState)}
      {this.loadingSpinner(this.props.loading)}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loading } = auth;

  return { loading };
};
export default connect(mapStateToProps, {logInAction, signUp})(SignInContainer);

