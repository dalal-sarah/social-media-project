import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { getPostsFailed } from '../actions/posts';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    checkedPots: 0,
    unCheckedPosts: 0
};

const postStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const postSuccess = (state, action) => {
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

const getPostsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const getPostsSuccess = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        error: null,
        loading: false,
        unCheckedPosts: action.posts.length,
        checkedPots: 0
    });
};

const incrementCheckedPosts = (state, action) => {
    return updateObject(state, { checkedPots: state.checkedPots + 1, unCheckedPosts: state.unCheckedPosts - 1 });
}

const decrementCheckedPosts = (state, action) => {
    return updateObject(state, { checkedPots: state.checkedPots - 1, unCheckedPosts: state.unCheckedPosts + 1 });
}

const getUnCheckedPostsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

const getUnCheckedPostsSuccess = (state, action) => {
    return updateObject(state, {  loading: false , posts : [...state.posts , ...action.posts] });
}

const getUnCheckedPostsFailed = (state, action) => {
    return updateObject(state, { error: action.error , loading : false});
}

const updateUncheckedPostsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

const updateUncheckedPostsSuccess =(state, action) => {
    return updateObject(state, { loading: false });
}

const updateUncheckedPostsFailed = (state, action) => {
    return updateObject(state, { error: action.error ,loading : false });
}

const resetTheState = (state, action) =>{
    return updateObject(state , { posts : [] });
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_START: return postStart(state, action);
        case actionTypes.POST_SUCCESS: return postSuccess(state, action);
        case actionTypes.POST_FAILED: return postFail(state, action);
        case actionTypes.GET_POSTS_START: return getPostsStart(state, action);
        case actionTypes.GET_POSTS_SUCCESS: return getPostsSuccess(state, action);
        case actionTypes.GET_POSTS_FAILED: return getPostsFailed(state, action);
        case actionTypes.INCREMENT_CHECKED_POSTS: return incrementCheckedPosts(state, action);
        case actionTypes.DECREMENT_CHECKED_POSTS: return decrementCheckedPosts(state, action);
        case actionTypes.GET_UNCHECKED_POSTS_START: return getUnCheckedPostsStart(state, action);
        case actionTypes.GET_UNCHECKED_POSTS_SUCCESS: return getUnCheckedPostsSuccess(state, action);
        case actionTypes.GET_UNCHECKED_POSTS_FAILED: return getUnCheckedPostsFailed(state, action);
        case actionTypes.UPDATE_UNCHECKED_POSTS_START: return updateUncheckedPostsStart(state, action);
        case actionTypes.UPDATE_UNCHECKED_POSTS_SUCCESS: return updateUncheckedPostsSuccess(state, action);
        case actionTypes.UPDATE_UNCHECKED_POSTS_FAILED: return updateUncheckedPostsFailed(state, action);
        case actionTypes.RESET_THE_STATE: return resetTheState(state, action);
        default:
            return state;
    }
};

export default postsReducer;