import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { getPostsFailed } from '../actions/posts';

const initialState = {
   posts : [],
   loading : false,
   error : null
};

const postStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const postSuccess = (state, action) => {
    return updateObject( state, { 
        error: null,
        loading: false

     } );
};

const postFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const getPostsStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const getPostsSuccess = (state, action) => {
    // console.log(action.posts );
    return updateObject( state, { 
        posts : action.posts,
        error: null,
        loading: false
     } );
};
const updatePostUsers = (state, action)=>{
       let posts = [...state.posts];
        var key;
        for( key in posts){
            if(posts[key].id == action.postId){
                console.log(posts);
                posts[key].users.push(action.userId);
            }
        }
    return updateObject( state, { 
        posts : posts
     } );
}

const getPostsFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const updatePostsStart = (state, action) =>{
    return updateObject( state, { error: null, loading: true } );
}
const updatePostsSuccess = (state, action) => {
    return updateObject( state, { 
        error: null,
        loading: false
     } );
};

const postsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.POST_START: return postStart(state, action);
        case actionTypes.POST_SUCCESS: return postSuccess(state, action);
        case actionTypes.POST_FAILED: return postFail(state, action);
        case actionTypes.GET_POSTS_START: return getPostsStart(state, action);
        case actionTypes.GET_POSTS_SUCCESS: return getPostsSuccess(state, action);
        case actionTypes.GET_POSTS_FAILED: return getPostsFail(state,action);
        case actionTypes.UPDATE_POST_USERS: return updatePostUsers(state,action);
        case actionTypes.UPDATE_POSTS_START: return updatePostsStart(state, action);
        case actionTypes.UPDATE_POSTS_SUCCES: return updatePostsSuccess(state,action);
        
        default:
            return state;
    }
};

export default postsReducer;