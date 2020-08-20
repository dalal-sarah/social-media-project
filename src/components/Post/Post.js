import React from 'react';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';


const post = (props) => (
    
    <article className="Post" style={{ margin: 30, width: '100%' }}>
        <Box display="flex" justifyContent="center">
            <Box borderRadius={16} {...props} >
                <ListItem alignItems="center">
                    <Checkbox name="index[]" value={props.id} onClick={props.cliked} />
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
            </Box>
        </Box>

    </article>
);

export default post;