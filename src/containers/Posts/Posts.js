import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Post from '../../components/Post/Post';
import CheckedCounter from '../../CheckedCounter/CheckedCounter'

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unCheckedPosts: -1,
            checkedPosts: 0,
            postId: true,
            userId : localStorage.getItem('userId')
        }
    }



    componentDidMount() {
        const { getPosts } = this.props;
        getPosts();

    }

    componentDidUpdate() {
        const { postsFetched } = this.props;
        if (postsFetched && this.state.unCheckedPosts < 0)
            this.updateUnCheckedPosts();
    }

    componentWillUnmount() {
        const { posts, putPostsToServer } = this.props ;
        putPostsToServer(posts);
    }

    incrementCheckedPosts  () {
        this.setState(
            {
                unCheckedPosts: this.state.unCheckedPosts - 1,
                checkedPosts: this.state.checkedPosts + 1
            }
        )
    }

    decrementCheckedPosts ()  {
        this.setState(prevState => {
            return {
                unCheckedPosts: prevState.unCheckedPosts + 1,
                checkedPosts: prevState.checkedPosts - 1
            }
        })
    }
    incrementUnCheckedPosts () {
        this.setState(prevState => {
            return {
                unCheckedPosts: prevState.unCheckedPosts - 1,
                checkedPosts: prevState.checkedPosts + 1
            }
        })
    }

  

    CheckboxOnChangeHandler (event)  {
        const { posts } = this.props ;
        this.setState({
            [event.target.id]: !posts[event.target.id].users.includes(this.state.userId)
        })
    }

    updateUnCheckedPosts  (){
        const { posts } = this.props;
        this.setState({
            checkedPosts: this.numberOfcheckedPosts,
            unCheckedPosts: posts.length - this.numberOfcheckedPosts
        })
    }


    render() {

        this.checkBoxOnClick = (event)  => {
            const { updatecheckedPosts } = this.props;
            if (event.target.checked) {
                this.incrementCheckedPosts();
            }
            else {
                this.decrementCheckedPosts();
            }
            updatecheckedPosts(event.target.id);
        }

        const { posts, loading } = this.props;
        let renPosts = <p style={{ textAlign: 'center' }}>Loading ....!</p>;
        this.numberOfcheckedPosts = 0;
        if (!loading) {
            renPosts = posts.map(post => {
                let checked = post.users.includes(this.state.userId);
                if (checked)
                    this.numberOfcheckedPosts++

                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                    >
                        <Checkbox key={post.id} checked={checked} name="" id={post.id} value="" onClick={this.checkBoxOnClick} />
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
                        <CheckedCounter {...this.props} checked={this.state.checkedPosts} unChecked={this.state.unCheckedPosts} />
                        <List >
                            {renPosts}
                        </List>
                    </Grid>
                </section>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts,
        error: state.postsReducer.error,
        loading: state.postsReducer.loading,
        postsFetched: state.postsReducer.postsFetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actions.getPosts()),
        updatecheckedPosts: (post) => dispatch(actions.updateCheckedPosts(post)),
        putPostsToServer: (posts) => dispatch(actions.putPostsToServer(posts))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

