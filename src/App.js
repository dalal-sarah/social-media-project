import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Theme from './Theme/Theme';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Theme>
          <AppRoutes />
        </Theme>

      </div>
    );
  }
}




export default withRouter(App);
