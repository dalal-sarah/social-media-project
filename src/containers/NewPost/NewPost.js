import React, { Component } from 'react';
import axios from '../../axios';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

// import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        userId: localStorage.getItem('userId'),
        users: [''],
        submitted: false
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            userId: localStorage.getItem('userId'),
            users: this.state.users
        };

        this.props.post(data);
        console.log(data);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.email);
    }

    render() {
        return (
            <div className="NewPost">
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"

                >
                    <h1>Add a Post</h1>
                    <InputLabel>title : </InputLabel>
                    <Input type='text' name='title' onChange={(event) => { this.handleChange(event) }} />
                    <InputLabel style={{ marginTop: 25,marginBottom: 25, width: '100%' }}>content : </InputLabel>
                    <TextareaAutosize rows="10" name='content' value={this.state.content} onChange={(event) => { this.handleChange(event) }} />
                    <Button onClick={this.postDataHandler}>Post</Button>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        error: state.postsReducer.error
    };
};

const mapDispatchToProps = dispatch => {
    return {

        post: (data) => dispatch(actions.post(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);