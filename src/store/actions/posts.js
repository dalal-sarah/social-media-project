import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const postStart = () => {
    return {
        type: actionTypes.POST_START
    };
};

export const postSuccess = () => {
    return {
        type: actionTypes.POST_SUCCESS
    };
};

export const PostFailed = (error) => {
    return {
        type: actionTypes.POST_FAILED,
        error: error
    };
};

export const getPostsStart = () => {
    return {
        type: actionTypes.GET_POSTS_START
    };
};

export const getPostsSuccess = (posts) => {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        posts: posts
    };
};

export const getPostsFailed = (error) => {
    return {
        type: actionTypes.GET_POSTS_FAILED,
        error: error
    };
};

export const updateCheckedPosts = (postId) => {
    console.log(postId);
    return {
        type: actionTypes.UPDATE_CHECKED_POSTS,
        postId: postId

    }
}

export const putPostsToServerStart = () => {
    return {
        type: actionTypes.PUT_POST_TO_SERVER_START
    };
};

export const putPostsToServerSuccess = () => {
    return {
        type: actionTypes.PUT_POST_TO_SERVER_SUCCESS
    };
};

export const putPostsToServerFailed = (error) => {
    return {
        type: actionTypes.PUT_POST_TO_SERVER_FAILED,
        error: error
    };
};

export const getPosts = () => {
    return dispatch => {
        const time = localStorage['lastLogIn'];
        console.log('lastLogIn', time);
        dispatch(getPostsStart())
        axios.get(`https://social-media-project-535bc.firebaseio.com/posts.json`)
            .then(response => {
                console.log(response.data);
                const fetchedPosts = [];
                for (let key in response.data) {
                    fetchedPosts.push({
                        ...response.data[key],
                        id: key,
                        users: response.data[key].users
                    });
                }
                dispatch(getPostsSuccess(fetchedPosts));
                // dispatch(getUnCheckedPosts());
            })
            .catch(error => {
                dispatch(getPostsFailed(error));
            });
    };
};

export const post = (Post) => {
    return dispatch => {
        dispatch(postStart());
        axios.post('/posts.json', Post)
            .then(response => {
                dispatch(postSuccess(response.data));
            })
            .catch(error => {
                dispatch(PostFailed(error));
            });
    };
};


export const putPostsToServer = (posts) => {
    return dispatch =>{
        dispatch(putPostsToServerStart());
    axios.put(`/posts.json`, posts)
        .then(() => {
            dispatch(putPostsToServerSuccess());
        })
        .catch(error => {
            dispatch(putPostsToServerFailed(error))
        });
    }
}
