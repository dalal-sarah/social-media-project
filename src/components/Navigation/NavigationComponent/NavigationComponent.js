import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavigationComponent extends Component {
    render() {
        const {link , exact ,children } =this.props;

        return (
            <li >
                <NavLink
                    to={link}
                    exact={exact}
                    >{children}</NavLink>
            </li>
        );
    }
}
export  default NavigationComponent;