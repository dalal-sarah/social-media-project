import React, { Component } from 'react';
import NavigationComonent from './NavigationComponent/NavigationComponent'
import Auxx from '../../hoc/Auxx'

class Navigation extends Component {
    render() {
        return (
            <Auxx>
                <NavigationComonent link='/posts' > posts </NavigationComonent>
                <NavigationComonent link='/newPost' > new post </NavigationComonent>
            </Auxx>
        );
    }
}
export default Navigation