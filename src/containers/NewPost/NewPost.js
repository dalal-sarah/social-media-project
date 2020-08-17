import React, { Component } from 'react';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';

// import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        submitted: false
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
        };
        axios.post( '/posts', data )
            .then( response => {
                console.log( response );
            } );
    }

    render () {

        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                {/* <label>Content</label> */}
                <textarea rows="10" value={this.state.content} onChange={( event ) => this.setState( { content: event.target.value } )} />
                <button onClick={this.postDataHandler}>Post</button>
            </div>
        );
    }
}

export default NewPost;