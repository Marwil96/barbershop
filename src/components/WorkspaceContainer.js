import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';

import { saveEmployee, fetchEmployees } from '../actions/authActions';
import construction from '../img/construction.svg'
import { Link } from "react-router-dom";

import { InputField, PrimaryButton, TemplateBox, FontVariableButton, EmployeeBox, ModalContainer } from './common/index.js';

class WorkspaceContainer extends Component {
  state = {
    formState:1,
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
    } else if(loading === false) {
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
  createForm() {
    this.setState({
      formState:2
    })
  }
  changeFormState(state) {
    this.setState({
      formState:state
    })
  }
  colorHandleChange(color, event) {
    this.setState({
      primaryColor:color.hex
    })
  }

   fontHandleChange(font) {
    this.setState({
      primaryFont:font
    })
  }

  emptyState() {
    return (
      <div className="p-12 container h-screen flex flex-col">
      <div className="h-64 absolute ml-64 pin-r pin-l pin-t z-0" style={{backgroundColor: this.state.primaryColor}}> </div>
        <h1 className="z-50 text-white"> Workspace </h1>
        <span className="mt-2 z-50 text-white"> Create a booking form so  </span>
        <div className="w-8/12 mt-8 py-8 shadow bg-white z-50 flex items-center flex-col justify-center rounded"> 
          <img src={construction} className="h-48 mb-6" />
          <h3 className="mb-6 text-2xl text-center font-medium"> Create your first bookingform. </h3>
          <PrimaryButton label="Create Project" onClick={this.createForm.bind(this)}/>
        </div>
      </div>
    );
  }
  createFormState() {
    return (
      <div className="p-12 absolute -ml-64 w-screen h-screen flex flex-col bg-white ">
      <div className="w-screen h-64 absolute pin-l pin-t z-0" style={{backgroundColor: this.state.primaryColor}}> </div>
        <h1 className={"text-white z-50 " + this.state.primaryFont}> Creating a booking form </h1>
        <span className="mt-2 text-white z-50"> Step 1/4 </span>
        <span className="mt-12 mb-2 font-semibold uppercase z-50 text-white"> Setup form </span>
        <div className="w-10/12 pb-4 pt-4 px-4 flex flex-col rounded bg-white shadow z-50"> 
         <div className="p-2 rounded shadow w-64 flex flex-col"> 
          <span className="mb-2 font-semibold underline opacity-75"> Pick primary color </span> 
          <CirclePicker onChange={ this.colorHandleChange.bind(this) } /> 
         </div>

         <div className="p-4 mt-4 rounded shadow flex flex-col"> 
          <span className="mb-2 font-semibold underline opacity-75"> Pick Font </span> 
          <div className="flex"> 
            <FontVariableButton label={"Arial"} font={"font-mono"} onClick={this.fontHandleChange.bind(this)} />
            <FontVariableButton label={"Poppins"} font={"font-poppins"} onClick={this.fontHandleChange.bind(this)} />
            <FontVariableButton label={"New Times Roman"} font={"font-serif"} onClick={this.fontHandleChange.bind(this)} />
            <FontVariableButton label={"Roboto Mono"} font={"font-mono"} onClick={this.fontHandleChange.bind(this)} />
          </div> 
         </div>
         <div className="mt-4"> <Link to="/Barbershop/bookingForm"> <PrimaryButton label={"Continue"} onClick={() => { this.changeFormState(3)}} width={"w-32"}/></Link> </div>
        </div>
      </div>
    );
  }
  addEmployeesFormState() {
    return (
      <div className="p-12 absolute -ml-64 w-screen h-screen flex flex-col bg-white ">
      <ModalContainer modalState={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)} onSave={this.saveEmployeeInformation.bind(this)} employeeData={this.state.employeeData} />
      <div className="w-screen h-64 absolute pin-l pin-t z-0" style={{backgroundColor: this.state.primaryColor}}> </div>
        <h1 className={"text-white z-50 " + this.state.primaryFont}> Creating a booking form </h1>
        <span className="mt-2 text-white z-40"> Step 2/4 </span>
        <span className="mt-12 mb-2 font-semibold uppercase z-40 text-white"> Barbershop options </span>
        <div className="w-10/12 pb-4 pt-4 px-4 flex flex-col rounded bg-white shadow z-40"> 
          <InputField onChange={console.log('Woha')} label="Name of company" placeholder="Barbershop AB"/>
          <span className="mb-2 mt-4 font-semibold opacity-75"> Add and edit employees </span>  
          <div className="flex pb-4"> 
            <div onClick={this.openModal.bind(this)} className="w-32 mr-3 cursor-pointer h-32 flex flex-col justify-center items-center shadow rounded"> 
              <span className="text-center text-3xl"> 
                +
              </span> 
              <span className="text-center text-sm mt-1"> Add employee </span>
            </div>
                  {this.renderEmployees(this.props.loading)}
          </div>
          <div className="mt-4"> <PrimaryButton label={"Continue"} onClick={() => { this.changeFormState(3)}} width={"w-32"}/> </div>
        </div>
      </div>
    );
  }
  renderState(state) {
    if(state === 1) {
      return this.emptyState()
    } else if(state === 2) {
      return this.createFormState()
    } else if(state === 3) {
      return this.addEmployeesFormState()
    }
  }
  onCancelButtonClick() {
    this.setState({
      formState:1
    })
  }
  cancelButton(state) {
    if(state > 1) {
      return (
      <button onClick={this.onCancelButtonClick.bind(this)} className="bg-orange-dark pin-r pin-t  mt-8 fixed mr-16 z-40 rounded py-4 px-4 font-sans font-bold text-base text-white" > 
      Go back </button>)
    } else {return null}
  }

  render() {
    return (
    <div>
      {this.cancelButton(this.state.formState)}
      {this.renderState(this.state.formState)}
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
  const { loading, user, employeesData, team } = auth;

  return { loading, user, employeesData, team };
};
export default connect(mapStateToProps, {saveEmployee, fetchEmployees})(WorkspaceContainer);

