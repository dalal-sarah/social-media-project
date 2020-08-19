import React, { Component ,Fragment } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';
import Register from './components/Auth/Register'
import LogIn from './components/Auth/LogIn'
import LogOut from './components/Auth/LogOut'
import Posts from './containers/Posts/Posts'
import newPost from './containers/NewPost/NewPost'
import Navigation from './components/Navigation/Navigation'
import Auxx from './hoc/Auxx'
import PrivateRoute from './components/Auth/PrivateRout'
import PublicRoute from './components/Auth/PublicRoute'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.isAuthenticated ? <Navigation {...this.props} /> : (null)}
        <React.Fragment>
          <Switch>
            <Route path="/Register" component={Register} />
            <Route path="/LogIn" exact component={LogIn} />
            {/* <Route path="/logOut" exact  render={()=>{this.props.logOut()}} /> */}
            <PrivateRoute path="/logOut" exact component={LogOut} />
            <PrivateRoute path="/posts" exact component={Posts} />
            <PrivateRoute path="/newpost" exact component={newPost} />
             <Redirect to="/posts" component={Posts} /> 
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logout())
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
