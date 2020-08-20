import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect , Link} from 'react-router-dom';
import axios from "axios";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import LogIn from './LogIn'


import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';





class Registration extends Component {

  theme = createMuiTheme({
    palette: {
      primary: {
        main: '#115293',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });


  // useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: '50%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(1),
  //     borderStyle: 'solid'
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));

  // classes = this.useStyles;

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
    event.preventDefault();
    const { email, password, displayName } = this.state;
    this.props.onAuth(email, password, displayName , this.props.history);
    console.log('registerd');
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
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
                id="standard-basic"
                color='primary'
              // size='small'
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
                id="standard-basic"
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
                id="standard-basic"
                color='primary'

              />

              <Button type="submit" color="secondary" style={{ margin: 20 }}>Register</Button>
              <div> you  have an account ?<Link to='LogIn'>Log in</Link></div>
            </Grid>
          </form>
        </div>
      </ThemeProvider>
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
    onAuth: (email, password, displayName ,history) => dispatch(actions.auth(email, password, displayName ,history))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration); 