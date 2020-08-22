import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Post from '../../components/Post/Post';
import CheckedCounter from '../../components/CheckedCounter'

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

class Posts extends Component {

    checkboxes = [];
    events = [];
    updatedPosts = [];

    componentDidMount() {
        if (this.props.lastLogIn)
            this.props.getPosts();
    }

    postOnClick = (event) => {
        this.events.push(event.target);
        if (event.target.checked) {
            this.props.incrementCheckedPosts();
            document.getElementById(event.target.id).name = event.target.id;
        }
        else {
            this.props.decrementCheckedPosts();
            document.getElementById(event.target.id).name = "";
        };
    }

    updateTheState = () => {
        const { posts } = this.props;
        posts.map((post) => {
            if (document.getElementById(post.id).name === "") {
                this.updatedPosts.push(post);
                return true;
            }
            return false;
        });
        this.props.updateUnCheckedPosts({ unCheckedPosts: this.updatedPosts });
    }

    componentWillUnmount() {
        this.updateTheState();
    }

    render() {
        const { posts, loading, checkedPosts, unCheckedPosts } = this.props;
        let renPosts = <p style={{ textAlign: 'center' }}>Loading ....!</p>;
        if (!loading) {
            renPosts = posts.map(post => {
                let checkBox = <Checkbox name="" id={post.id} value="" onClick={this.postOnClick} />
                this.checkboxes.push(checkBox);
                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                    >
                        {checkBox}
                    </Post>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"

                    >
                        <CheckedCounter checked={checkedPosts} unChecked={unCheckedPosts} />
                        <List >
                            {renPosts}
                        </List>
                    </Grid>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts,
        error: state.postsReducer.error,
        loading: state.postsReducer.loading,
        checkedPosts: state.postsReducer.checkedPots,
        unCheckedPosts: state.postsReducer.unCheckedPosts,
        lastLogIn: state.authReducer.lastLogIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actions.getPosts()),
        incrementCheckedPosts: () => dispatch(actions.incrementCheckedPosts()),
        decrementCheckedPosts: () => dispatch(actions.decrementCheckedPosts()),
        updateUnCheckedPosts: (posts) => dispatch(actions.updateUncheckedPosts(posts))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

