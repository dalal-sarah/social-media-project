import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Post from '../../components/Post/Post';
import CheckedCounter from '../../components/CheckedCounter'

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unCheckedPosts: -1,
            checkedPosts: 0
        }
    }

    componentDidMount() {
        const { getPosts } = this.props ? this.props : null;
        getPosts();
        
    }
    
    componentDidUpdate(){
        const {postsFetched} = this.props ? this.props : null ;
            if (postsFetched && this.state.unCheckedPosts < 0)
               this.updateUnCheckedPosts();
    }

    // shouldComponentUpdate() {
    //     return !this.props.postsFetched 
    // }

    componentWillUnmount() {
        const { posts, putPostsToServer } = this.props ? this.props : null;
        putPostsToServer(posts);
    }


    render() {

        this.incrementCheckedPosts = () => {
            this.setState(
                {
                    unCheckedPosts: this.state.unCheckedPosts - 1,
                    checkedPosts: this.state.checkedPosts + 1
                }
            )
        }

        this.decrementCheckedPosts = () => {
            this.setState(
                {
                    unCheckedPosts: this.state.unCheckedPosts + 1,
                    checkedPosts: this.state.checkedPosts - 1
                }
            )
        }
        this.incrementUnCheckedPosts = () => {
            this.setState(
                {
                    unCheckedPosts: this.state.unCheckedPosts + 1
                }
            )
        }

        this.checkBoxOnClick = (event) => {
            const { updatecheckedPosts } = this.props ? this.props : null;
            if (event.target.checked) {
                this.incrementCheckedPosts();
            }
            else {
                this.decrementCheckedPosts();
            }
            updatecheckedPosts(event.target.id)
        }

        this.updateUnCheckedPosts = () =>{
            this.setState({
                unCheckedPosts: this.numberOfUncheckedPosts
            })
        }

        const { posts, loading } = this.props ? this.props : null;
        var renPosts = <p style={{ textAlign: 'center' }}>Loading ....!</p>;
        this.numberOfUncheckedPosts = 0;
        if (!loading) {
            const userId = localStorage.getItem('userId');
            renPosts = posts.map(post => {
                if (!post.users.includes(userId)) {
                    this.numberOfUncheckedPosts++;
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                        >
                            <Checkbox key={post.id} name="" id={post.id} value="" onClick={this.checkBoxOnClick} />
                        </Post>
                    );
                }
                return false;
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

