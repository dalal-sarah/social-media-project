import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation'


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} render={(props) => (
            isAuthenticated ? (
                <div>
                    <Navigation {...props} />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/LogIn" />
                )
        )} />
    )

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.authReducer.isAuth
});

export default connect(mapStatetoProps)(PrivateRoute);