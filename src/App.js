import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { simpleAction } from './actions/authActions';

import SignInContainer from './components/SignInContainer';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ScheduleContainer from './components/ScheduleContainer';
import WorkspaceContainer from './components/WorkspaceContainer';
import TeamSettings from './components/TeamSettings';

class App extends Component {
  simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
  	console.log("user")
    return (
      <div className="container font-sans">
        <Switch>
	      <Route exact path='/' component={SignInContainer}/>
	      <div className="w-full bg-white">
	      <Sidebar />
	      <div className="ml-64">
	      <Switch>
	      	<Route path={"/" + this.props.user + "/Dashboard"} component={Dashboard}/>
	      	<Route path={"/" + this.props.user + "/workspace"} component={WorkspaceContainer}/>
	      	<Route path={"/" + this.props.user + "/schedule"} component={ScheduleContainer}/>
          <Route path={"/" + this.props.user + "/teamSettings"} component={TeamSettings}/>
	      </Switch>
	      </div>
	      </div>
    	</Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ auth }) => {
  const { user } = auth;

  return { user };
};
export default connect(mapStateToProps, {})(App);

