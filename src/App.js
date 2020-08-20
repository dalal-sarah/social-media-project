import React, { Component  } from 'react';
import './App.css';
import {  withRouter } from 'react-router-dom';
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
