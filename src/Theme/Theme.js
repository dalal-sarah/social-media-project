import React, { Component } from 'react'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Theme extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#115293',
                },
                secondary: {
                    main: '#dc004e',
                },
            },
        });
        const {children} = this.props ? this.props : null;
        return (
            <ThemeProvider  theme={theme}>
                {children}
            </ThemeProvider>
        );
    }
}
export default Theme