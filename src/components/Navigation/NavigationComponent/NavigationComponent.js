import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavigationComponent extends Component {
    render() {

        return (
            <li >
                <NavLink
                    to={this.props.link}
                    exact={this.props.exact}
                    >{this.props.children}</NavLink>
            </li>
        );
    }
}
export  default NavigationComponent;