import React, { Component } from 'react';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import classes from './Navigation.module.css'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathes: [
                { path: '/posts', label: 'posts' },
                { path: '/newPost', label: 'new post' },
                { path: '/logOut', label: 'logOut' }

            ],
            value: 'posts'
            
        }
    }

    handleChange(event, newValue) {
        const {history} = this.props ;
        if (this.state.pathes[newValue])
            history.push(this.state.pathes[newValue].path);
    }

    render() {
        const displyName = localStorage.getItem('displayName');
        const renderedComponents = this.state.pathes.map(path => (
            <BottomNavigationAction className={classes.item} label={path.label} key={path.label} to={path.path} />
        )
        );
        return (
            <React.Fragment>
                <BottomNavigation
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        this.handleChange(event, newValue);
                    }}
                    showLabels
                >
                    {renderedComponents}
                    <BottomNavigationAction className={classes.useritem} label={displyName} key={displyName}></BottomNavigationAction>

                </BottomNavigation>
            </React.Fragment>
        );
    }
}



export default Navigation;