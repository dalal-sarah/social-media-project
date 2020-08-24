import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import classes from './checkedCounter.module.css';

class CheckedCounter extends Component {

    render() {
        const { checked, unChecked } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"

            >
                <div className={classes.counter}>
                    <label className={classes.checked} > Checked :  {checked} </label>
                    <label className={classes.checked}> UnChecked :  {unChecked}</label>
                </div>

            </Grid>

        );
    }
}
export default CheckedCounter