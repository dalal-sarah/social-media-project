import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    posts: [],
    loading: false,
    error: null,
    postsFetched: false
};

const postStart = (state) => {
    return updateObject(state, { error: null, loading: true });
};

const postSuccess = (state) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
};

const postFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const getPostsStart = (state) => {
    return updateObject(state, { error: null, loading: true, postsFetched: false });
};

const getPostsSuccess = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        error: null,
        loading: false,
        postsFetched: true
    });
};

const getPostsFailed = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const putPostsToServerStart = (state) => {
    return updateObject(state, { error: null, loading: true });
};

const putPostsToServerSuccess = (state) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
};

const putPostsToServerFailed = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const updatePostUsers = (state, action) => {
    const userid = localStorage.getItem('userId');
    let posts = state.posts;
    posts.map((post) => {
        if (post.id === action.postId) {
            const index = post.users.indexOf(userid);
            index >= 0 ? post.users.splice(index, 1) : post.users.push(userid);
            return true;
        }
        return false;

    });
    console.log(state.posts)
    return updateObject(state, {
        posts: state.posts
    });
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_START: return postStart(state, action);
        case actionTypes.POST_SUCCESS: return postSuccess(state, action);
        case actionTypes.POST_FAILED: return postFail(state, action);
        case actionTypes.GET_POSTS_START: return getPostsStart(state, action);
        case actionTypes.GET_POSTS_SUCCESS: return getPostsSuccess(state, action);
        case actionTypes.GET_POSTS_FAILED: return getPostsFailed(state, action);
        case actionTypes.UPDATE_CHECKED_POSTS: return updatePostUsers(state, action);
        case actionTypes.PUT_POST_TO_SERVER_START: return putPostsToServerStart(state, action);
        case actionTypes.PUT_POST_TO_SERVER_SUCCESS: return putPostsToServerSuccess(state, action);
        case actionTypes.PUT_POST_TO_SERVER_FAILED: return putPostsToServerFailed(state, action);
        default:
            return state;
    }
};

export default postsReducer;