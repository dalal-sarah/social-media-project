
import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Register from '../components/Auth/Register'
import LogIn from '../components/Auth/LogIn'
import LogOut from '../components/Auth/LogOut'
import Posts from '../containers/Posts/Posts'
import newPost from '../containers/NewPost/NewPost'
import Navigation from '../components/Navigation/Navigation'
import PrivateRoute from '../components/Auth/PrivateRout'
import PublicRoute from '../components/Auth/PublicRoute'
import { connect } from 'react-redux';

class AppRoutes extends Component {
    render() {

        return (
            <React.Fragment>
                {this.props.isAuthenticated ? <Navigation {...this.props} /> : (null)}
                <Switch>
                    <Route path="/Register" component={Register} />
                    <Route path="/LogIn" exact component={LogIn} />
                    <PrivateRoute path="/logOut" exact component={LogOut} />
                    <PrivateRoute path="/posts" exact component={Posts} />
                    <PrivateRoute path="/newpost" exact component={newPost} />
                    <Redirect to="/posts" component={Posts} />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.authReducer.isAuth
    };
  };
  
export default withRouter(connect(mapStateToProps) (AppRoutes))