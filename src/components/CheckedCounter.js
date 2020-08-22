import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class CheckedCounter extends Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"

            >
                <label> Checked :  {this.props.checked} </label>
                <label> UnChecked :  {this.props.unChecked}</label>

            </Grid>

        );
    }
}
export default CheckedCounter