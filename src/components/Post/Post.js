import React from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const post = (props) => (
    
    <article className="Post" style={{ margin: 30,textAlign:'center', width: '100%' }}>
                <ListItem alignItems="center">
                    {props.children}
                    <div>{props.title}</div>
                </ListItem>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-end"
                    

                >
                    <ListItem alignItems="center">
                        <div className="Info">
                            <ListItemText>
                                <div className="content">{props.content}</div>
                            </ListItemText>
                        </div>
                    </ListItem>
                </Grid>

    </article>
);

export default post;