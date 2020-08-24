import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            userId: localStorage.getItem('userId'),
            users: [''],
            submitted: false
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        this.postDataHandler = () => {
            const {post} = this.props;
            const data = {
                title: this.state.title,
                content: this.state.content,
                userId: localStorage.getItem('userId'),
                time: new Date().getTime() / 1000,
                users: this.state.users
            };
        post(data);
        }
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
                    <InputLabel style={{ marginTop: 25, marginBottom: 25, width: '100%' }}>content : </InputLabel>
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
        post: (newPost) => dispatch(actions.post(newPost))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);