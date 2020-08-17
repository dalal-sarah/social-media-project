import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
// import * as firebase from "firebase/app";
// import "firebase/auth";

class LogIn extends Component {

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
            <ThemeProvider theme={this.theme}>
                <div>
                    <form style={{ marginTop: 100, width: '100%' }} onSubmit={(event) => { this.handleSubmit(event) }}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="center"

                        >
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(event) => { this.handleChange(event) }}
                                required
                                id="standard-basic"
                                color='primary'
                                variant="outlined"
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => { this.handleChange(event) }}
                                required
                                id="standard-basic"
                                color='primary'
                            />

                            <Button type="submit" color="secondary">LogIn</Button>
                            <div> you dont have an account ?<a href='/Register'> Sign up</a></div>
                        </Grid>
                    </form>
                </div>
            </ThemeProvider>
        );
    }
}
export default LogIn