import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class CheckedCounter extends Component {

    render() {
        const {checked , unChecked} = this.props ? this.props : null ;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"

            >
                <label> Checked :  {checked} </label>
                <label> UnChecked :  {unChecked}</label>

            </Grid>

        );
    }
}
export default CheckedCounter