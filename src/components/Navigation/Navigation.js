import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// import { withRouter, Route ,Redirect} from "react-router-dom";


// import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';

class Navigation extends Component {

    state = {
        pathes: [
            { path: '/posts', label: 'posts' },
            { path: '/newPost', label: 'new post' },
            { path: '/logOut', label: 'logOut' }
        ],
        value: 'posts'
    }

    handleChange(event, newValue) {

        console.log(this.state.pathes[newValue].path);
        this.props.history.push(this.state.pathes[newValue].path);
    }

    renderedComponents = this.state.pathes.map(path => (
        <BottomNavigationAction label={path.label} key={path.label} to={path.path} />
    )
    );

    render() {
        console.log(this.props);
        console.log('rendering navigation');
        return (
            <React.Fragment>
                <BottomNavigation
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        this.handleChange(event, newValue);
                    }}
                    showLabels
                >
                    {this.renderedComponents}

                </BottomNavigation>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        RedirectPath: state.authReducer.RedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {

        setPath: (path) => dispatch(actions.setRedirectPath(path))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);