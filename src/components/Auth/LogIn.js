import React, { Component } from "react";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';



class LogIn extends Component {

    state = {
        email: "",
        password: "",
        LogInErrors: ""
    };

    constructor(props) {
        super(props);
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
        this.props.logIn(email, password, this.props.history);

    }

    render() {
        return (
            <div>
                <form style={{ marginTop: 100, width: '100%' }} onSubmit={this.handleSubmit}>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"

                    >
                        <Input
                            style={{ margin: 20 }}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(event) => { this.handleChange(event) }}
                            required
                            color='primary'
                            variant="outlined"
                            key='email'
                        />

                        <Input
                            style={{ margin: 20 }}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(event) => { this.handleChange(event) }}
                            required
                            color='primary'
                            key='password'
                        />

                        <Button type="submit" color="secondary">LogIn</Button>
                        <div> you dont have an account ?<Link to='/Register'> Sign up</Link></div>
                    </Grid>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {

        logIn: (email, password, history) => dispatch(actions.logIn(email, password, history))

    };
};

export default connect(null, mapDispatchToProps)(LogIn);
