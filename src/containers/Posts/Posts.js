import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Post from '../../components/Post/Post';

// import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
// import { makeStyles } from '@material-ui/core/styles';
// import './Posts.css';


class Posts extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: 'any title',
                author: 'any author'

            }
        ]
    }

    

    componentDidMount() {
        this.props.getPosts();

    }
    componentWillUpdate() {
        return false;
    }
    componentWillUnmount() {

    }

    postOnClick = (event) => {
        this.props.posts.filter((post) => {
            console.log(event.target.value, post.id)
            if (post.id == event.target.value) {
                // this.props.posts.users.push(localStorage.getItem('userId'));
                this.props.updatePostUsers(localStorage.getItem('userId'), post.id);
                console.log(this.props.posts.users);
            }
        });
    }

    render() {
        const { posts, error, loading } = this.props;

        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       width: '100%',
        //       maxWidth: '36ch',
        //       backgroundColor: theme.palette.background.paper,
        //     },
        //     inline: {
        //       display: 'inline',
        //     },
        //   }));

        //   const classes = useStyles();

        console.log('rendering posts');
        let renPosts = <p style={{ textAlign: 'center' }}>Loading ....!</p>;
        if (!loading) {
            console.log(posts);
            renPosts = posts.map(post => {
                return (
                  
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            cliked={this.postOnClick}
                        />
                   

                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    <List >
                    {renPosts}
                    </List>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts,
        error: state.postsReducer.error,
        loading: state.postsReducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getPosts: () => dispatch(actions.getPosts()),
        updatePostUsers: (userId, postId) => dispatch(actions.updatePostUsers(userId, postId)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

