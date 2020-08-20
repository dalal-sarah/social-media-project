import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormControl from '@material-ui/core/FormControl';





class Registration extends Component {


  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      displayName: "",
      registrationErrors: ""
    };

  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.email);
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    const { email, password, displayName } = this.state;
    this.props.onAuth(email, password, displayName, history);
    console.log('registerd');
  }

  render() {
    return (

      <div >
        <form style={{ marginTop: 100, width: '100%' }} onSubmit={(event) => { this.handleSubmit(event) }}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"

          >
            <Input
              style={{ margin: 20 }}
              variant="outlined"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => { this.handleChange(event) }}
              required
              color='primary'
            />

            <Input
              style={{ margin: 20 }}
              variant="outlined"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => { this.handleChange(event) }}
              required
              color='primary'
            />

            <Input
              style={{ margin: 20 }}
              type="text"
              name="displayName"
              placeholder="displayName"
              value={this.state.password_confirmation}
              onChange={(event) => { this.handleChange(event) }}
              required
              color='primary'

            />

            <Button type="submit" color="secondary" style={{ margin: 20 }}>Register</Button>
            <div> you  have an account ?<Link to='LogIn'>Log in</Link></div>
          </Grid>
        </form>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authReducer.error

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, displayName, history) => dispatch(actions.auth(email, password, displayName, history))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration); 