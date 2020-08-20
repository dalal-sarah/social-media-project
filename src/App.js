import React, { Component ,Fragment } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';

import { connect } from 'react-redux';
import AppRoutes from './Routes/AppRoutes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppRoutes />
      </div>
    );
  }
}




export default withRouter(App);
