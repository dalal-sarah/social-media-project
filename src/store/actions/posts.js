import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const postStart = (  ) => {
    return {
        type: actionTypes.POST_START
 
    };
};

export const postSuccess = (  ) => {
    return {
        type: actionTypes.POST_SUCCESS
    };
};

export const PostFailed = () => {
    return {
        type: actionTypes.POST_FAILED
    };
};

export const getPostsStart = (  ) => {
    return {
        type: actionTypes.GET_POSTS_START
    };
};

export const getPostsSuccess = ( posts ) => {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        posts : posts
    };
};

export const getPostsFailed = () => {
    return {
        type: actionTypes.GET_POSTS_FAILED
    };
};
export const updatePostUsers=(userId , postId)=>{
    return{
        type: actionTypes.UPDATE_POST_USERS,
        userId : userId,
        postId : postId
    }

}

export const updatePostsStart=()=>{
    return{
        type: actionTypes.UPDATE_POSTS_START
    }

}
export const updatePostsSuccess = () => {
    return{
        type : actionTypes.UPDATE_POSTS_SUCCES
    }

}

export const getPosts = () => {
    return dispatch => {
        dispatch(getPostsStart())
        axios.get( 'https://social-media-project-535bc.firebaseio.com/posts.json?orderBy="userId"' )
            .then( response => {
                console.log(response.data)
                const fetchedPosts = [];
                for ( let key in response.data ) {
                    fetchedPosts.push( {
                        ...response.data[key],
                        id: key,
                        users : response.data[key].users
                    } );
                }
               dispatch(getPostsSuccess(fetchedPosts));
            } ) 
            .catch( error => {
                dispatch(getPostsFailed(error));
            } );
    };
};

export const post = (post) => {
    return dispatch => {   
        dispatch(postStart());
        axios.post( '/posts.json' ,post )
            .then( response => {
               dispatch(postSuccess(response.data));
            } ) 
            .catch( error => {
                dispatch(PostFailed());
            } );
    };
};

export const updatePosts = (posts) => {
    return dispatch => {  

        dispatch(updatePostsStart());
        axios.post( '/posts.json' ,post )
            .then( response => {
               dispatch(updatePostsSuccess(response.data));
            } ) 
            .catch( error => {
                dispatch(PostFailed(error));
            } );
    };
};