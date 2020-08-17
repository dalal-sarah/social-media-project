import React, { Component } from "react";
import axios from "axios";
// import * as firebase from "firebase/app";
// import "firebase/auth";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      LogInErrors: ""
    };

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.email);
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuhXnx0Dz_nD1C_aZJ0x58sOGAgfIZtCc",
        {
          
            email: email,
            password: password,
            returnSecureToken: true
          
        }
      )
      .then(response => {
        console.log(response);
      
      })
      .catch(error => {
        alert(error);
        console.log("LogIn error", error);
      });
    event.preventDefault();
    console.log('logged');
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>{this.handleSubmit(event)}}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(event)=>{this.handleChange(event)}}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event)=>{this.handleChange(event)}}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
export default Registration