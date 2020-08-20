
import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Register from '../components/Auth/Register'
import LogIn from '../components/Auth/LogIn'
import LogOut from '../components/Auth/LogOut'
import Posts from '../containers/Posts/Posts'
import NewPost from '../containers/NewPost/NewPost'
import PrivateRoute from './PrivateRout'
import { connect } from 'react-redux';

class AppRoutes extends Component {
    render() {

        return (
            <React.Fragment>            
                <Switch>
                    <Route path="/Register" component={Register} />
                    <Route path="/LogIn" exact component={LogIn} />
                    <PrivateRoute path="/logOut" exact component={LogOut} />
                    <PrivateRoute path="/posts" exact component={Posts} />
                    <PrivateRoute path="/newpost" exact component={NewPost} />
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