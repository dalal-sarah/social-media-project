import React, { Component } from 'react'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Theme extends Component {

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#115293',
            },
            secondary: {
                main: '#dc004e',
            },
        },
    });

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}
export default Theme