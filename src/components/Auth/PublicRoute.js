import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            !isAuthenticated ? (
                <Redirect to="/LogIn" />
            ) : (
                    <Component {...props} />
                )
        )} />
    )

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.authReducer.isAuth
});

export default connect(mapStatetoProps)(PublicRoute);