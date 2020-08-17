import React from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Register from './components/Auth/Register'
import LogIn from './components/Auth/LogIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Register" component={Register} />
        <Route path="/LogIn" exact component={LogIn} />
        <Redirect to="/LogIn" component={LogIn} />
      </Switch>
    </div>
  );
}

export default withRouter (App);
