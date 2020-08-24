import React, { Component } from "react";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import classes from './css/LogIn.module.css'

class LogIn extends Component {

  

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            LogInErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
        const { logIn , history} = this.props  ;
        logIn(email,password,history);   
        
    }

    render() {    
        return (  
                <div>
                    <form  onSubmit={this.handleSubmit }
                    className={classes.form}>
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
                                color='primary'
                                variant="outlined"
                                key='email'
                                className={classes.input}
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => { this.handleChange(event) }}
                                required
                                color='primary'
                                key='password'
                                className={classes.input}
                            />

                            <Button className={classes.submit} type="submit" color="secondary">LogIn</Button>
                            <div> you dont have an account ?<Link to='/Register'> Sign up</Link></div>
                        </Grid>
                    </form>
                </div>   
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
         
         logIn: ( email, password ,history ) => dispatch( actions.logIn( email, password,history ) )

    };
};

export default connect(null, mapDispatchToProps )( LogIn );
