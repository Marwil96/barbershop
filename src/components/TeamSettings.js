import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { saveEmployee, fetchEmployees } from '../actions/authActions';

import { InputField, PrimaryButton, TemplateBox, FontVariableButton, EmployeeBox, ModalContainer } from './common/index.js';

class TeamSettings extends Component {
  state = {
    primaryColor:'#f6993f',
    modalIsOpen: false,
    employeeData: {name:"", mail:"", phoneNumber:""}
  }
  componentWillMount() {
      this.props.fetchEmployees()
      console.log(this.props.employeesData)
  }
  renderEmployees(loading) {
    if(loading) {
      return null
    } else if(loading === false & this.props.employeesData !== undefined) {
     return this.props.employeesData.map(data => (
        <EmployeeBox data={data} onClick={this.openModal.bind(this)} key={data.id}/>
    ))
    }
  }
  saveEmployeeInformation(firstName, lastName, mail, phoneNumber) {
    this.closeModal()
    var fullName = (firstName + " " + lastName)
    console.log(firstName)
    this.props.saveEmployee(31313, mail, fullName, phoneNumber, this.props.employeesData)
  }
   closeModal() {
    this.setState({modalIsOpen: false});
  }
    openModal(data) {
      console.log(data)
    this.setState({modalIsOpen: true, employeeData:data});
  }

  render() {
    return (
      <div className="container h-screen flex flex-col justify-center bg-grey-lighter">
        <div className="p-12 h-screen flex flex-col bg-white">
      <ModalContainer modalState={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)} onSave={this.saveEmployeeInformation.bind(this)} employeeData={this.state.employeeData} />
      <div className="h-64 absolute ml-64 pin-r pin-l pin-t z-0" style={{backgroundColor: this.state.primaryColor}}> </div>
        <h1 className={"text-white z-50 " + this.state.primaryFont}> Settings </h1>
        <span className="mt-2 text-white z-40"> Step 2/4 </span>
        <span className="mt-12 mb-2 font-semibold uppercase z-40 text-white"> Barbershop options </span>
        <div className="w-10/12 h-auto pb-4 pt-4 px-4 flex flex-col rounded bg-white shadow z-40"> 
          <InputField onChange={console.log('Woha')} label="Name of company" placeholder="Barbershop AB"/>
          <span className="mb-2 mt-4 font-semibold opacity-75"> Add and edit employees </span>  
          <div className="flex pb-4 flex-wrap "> 
            <div onClick={this.openModal.bind(this)} className="w-32 bg-orange mr-3 cursor-pointer h-32 flex flex-col justify-center items-center shadow rounded"> 
              <span className="text-center text-white text-4xl"> 
                +
              </span> 
              <span className="text-center text-white text-sm mt-1"> Add employee </span>
            </div>
                  {this.renderEmployees(this.props.loading)}
          </div>
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
  const { loading, user, employeesData } = auth;

  return { loading, user, employeesData };
};
export default connect(mapStateToProps, { saveEmployee, fetchEmployees })(TeamSettings);

