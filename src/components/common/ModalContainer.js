import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { InputField, PrimaryButton } from './index';
import accountImage from '../../img/account.svg'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width: '70%',
    height:'70vh',
    borderRadius:'4px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex: 100,
    boxShadow:'#0000002b 0px 0px 8px 1px'
  },
  overlay: {
    zIndex:110,
    background: '#00000094'
  }
};
 
class ModalContainer extends React.Component {
  state={
    firstName:"George",
    lastName:"Bush",
    mail:"ex@ex.com",
    phoneNumber:313131
  }

  firstNameChange(event) {
      this.setState({
        firstName:event.target.value
      })
    }
    lastNameChange(event) {
      this.setState({
        lastName:event.target.value
      })
    }
    emailChange(event) {
      this.setState({
        mail:event.target.value
      })
    }
    phoneNumberChange(event) {
      this.setState({
        phoneNumber:event.target.value
      })
    }
  render() {
    var name = this.props.employeeData.name;
    if(name !== undefined) {
    var lastName = name.split(' ').slice(-1).join(' ');
    var firstName = name.split(' ').slice(0, -1).join(' ');
    console.log(lastName, firstName)
    }
    return (
      <div>
        <Modal
          isOpen={this.props.modalState}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={400}
        >
          <div className="w-full flex flex-col p-2">
            <div className="w-full border-b"> 
              <h2 className="mb-4 font-semibold">Add an employee</h2>
              <span className="self-end text-3xl absolute cursor-pointer pin-r pin-t mr-5 mt-5" onClick={this.props.closeModal}>X</span>
            </div>
            <div className="w-full flex py-4">
            <div className="flex flex-col w-6/12">
              <div className="flex"> 
                <InputField onChange={this.firstNameChange.bind(this)} value={firstName} label={"First name"} placeholder={"George"}/> 
                <InputField onChange={this.lastNameChange.bind(this)} value={lastName} label={"Last name"} placeholder={"Bush"}/> 
              </div>
              <InputField onChange={this.emailChange.bind(this)} value={this.props.employeeData.mail} label={"Email"} placeholder={"example@example.com"}/>
              <InputField onChange={this.phoneNumberChange.bind(this)} value={this.props.employeeData.phoneNumber} label={"Phonenumber"} placeholder={"+46123 45678"}/>
              <PrimaryButton label={"Save"} width={"w-32 mt-4"} onClick={() => {this.props.onSave( this.state.firstName, this.state.lastName, this.state.mail, this.state.phoneNumber)}}/>
            </div>
            <div className="w-6/12  px-6 flex flex-col items-center justify-center">
              <div className="w-8/12 h-64 bg-orange flex items-center justify-center rounded"> <span className="text-5xl font-bold text-white"> WM </span> </div>
              <button className="p-4 rounded bg-white border mt-4"> Upload profile image </button>
            </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;