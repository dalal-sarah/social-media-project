import React from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';
import Register from './components/Auth/Register'
import LogIn from './components/Auth/LogIn'
import { connect } from 'react-redux';

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
const mapStateToProps = state => {
  return {
    // isAuthenticated: state.token !== null
  };
};



export default withRouter( connect( mapStateToProps )( App ) );
