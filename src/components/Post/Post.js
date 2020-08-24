import React from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import classes from './posts.module.css'

const post = (props) => (
    
    <article className={classes.post}>
                <ListItem alignItems="center" className={classes.title}>
                    {props.children}
                    <div>{props.title}</div>
                </ListItem>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-end"
                    

                >
                    <ListItem alignItems="center" className={classes.content}>
                            <ListItemText>
                                <div className="content">{props.content}</div>
                            </ListItemText>
                    </ListItem>
                </Grid>

    </article>
);

export default post;