import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from '../container/signup';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import Profile from './Profile';

export default class App extends Component{

  render(){
    return(
      <div className="App">
				<Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/logout" component={Logout}/>
          </div>
        </Router>
      </div>
    );
  }
}