import React from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Register from './components/Auth/Register'
import LogIn from './components/Auth/LogIn'

function App() {
  return (
    <div className="App">
      <h1> hello there</h1>
      <LogIn/>
     
    </div>
  );
}

export default App;
