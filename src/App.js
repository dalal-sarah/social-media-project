import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';
import Register from './components/Auth/Register'
import LogIn from './components/Auth/LogIn'
import Posts from './containers/Posts/Posts'
import newPost from './containers/NewPost/NewPost'
import Navigation from './components/Navigation/Navigation'
import Auxx from './hoc/Auxx'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let unregestiredUserComp = (
      <Auxx>
        <Switch>
          <Route path="/Register" component={Register} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path="/Posts" exact component={Posts} />
          <Route path="/newpost" exact component={newPost} />
          <Redirect to="/LogIn" component={LogIn} />
        </Switch>
      </Auxx>
    )
    let regestiredUserComp = (
      <Auxx>
        <Switch>
          <Route path="/Posts" exact component={Posts} />
          <Route path="/newpost" exact component={newPost} />
          <Redirect to="/posts" component={Posts} />
        </Switch>
      </Auxx>
    )
    let routes = this.props.isAuthenticated ? regestiredUserComp : unregestiredUserComp ;
    let navComp = null ;
    if(this.props.isAuthenticated)
    navComp = ( <Navigation /> );
    return (
      <div className="App">
        {navComp}
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: localStorage['token'] !== null
  };
};



export default withRouter(connect(mapStateToProps)(App));
