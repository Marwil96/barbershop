// import React, { Component } from 'react';
// import '../App.css';
// import { connect } from 'react-redux';
// import { logInAction } from '../actions/authActions';

// // import InputField from './common/index';

// class SignUpContainer extends Component {
//   state = {
//     email:'example@example.com',
//     password:'password'
//   }
//   passwordChange(event) {
//       console.log(event.target.value)
//       this.setState({
//         password:event.target.value
//       })
//     }
//   emailChange(event) {
//     console.log(event.target.value)
//       this.setState({
//         email:event.target.value
//       })
//   }
//   submitForm(event){
//     var { password, email } = this.state;
//     console.log("SubmitForm Event", password);
//     this.props.logInAction(email, password);
//     event.preventDefault();
//   } 
//   loadingSpinner(loading) {
//     if(loading) {
//       return "Loading"
//     } else return null
//   }
//   render() {
//     return (
//       <div className="container">
//         <form className="w-48 h-24 bg-blue" onSubmit={this.submitForm.bind(this)}>
//           <InputField onChange={this.emailChange.bind(this)} value={this.state.email} label="Email"/>
//           <InputField onChange={this.passwordChange.bind(this)} value={this.state.password} label="Password"/>
//           <InputField onChange={this.passwordChange.bind(this)} value={this.state.password} label="Password"/>
//           <button className="bg-grey w-24 h-12"> Woha </button>
//           {this.loadingSpinner(this.props.loading)}
//         </form>
//       </div>
//     );
//   }
// }

// // const mapDispatchToProps = dispatch => ({
// //  logInAction: () => dispatch(logInAction())
// // })

// // const mapStateToProps = state => ({
// //  ...state
// // })

// const mapStateToProps = ({ auth }) => {
//   const { loading } = auth;

//   return { loading };
// };
// export default connect(mapStateToProps, {logInAction})(SignUpContainer);

