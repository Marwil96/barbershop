import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { simpleAction } from './actions/authActions';

import SignInContainer from './components/SignInContainer';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ScheduleContainer from './components/ScheduleContainer';

class App extends Component {
  simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
    return (
      <div className="container font-sans">
        <Switch>
	      <Route exact path='/' component={SignInContainer}/>
	      <div>
	      <Sidebar/>
	      <Switch>
	      	<Route path="/Dashboard" component={Dashboard}/>
	      	<Route path="/Schedule" component={ScheduleContainer}/>
	      </Switch>
	      </div>
    	</Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
 ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

