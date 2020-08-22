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

export const incrementCheckedPosts = () => {
    return {
        type: actionTypes.INCREMENT_CHECKED_POSTS
    }
}

export const decrementCheckedPosts = () => {
    return {
        type: actionTypes.DECREMENT_CHECKED_POSTS
    }
}

export const getUnCheckedPostsStart = () => {
    return {
        type: actionTypes.GET_UNCHECKED_POSTS_START
    }
}

export const getUnCheckedPostsSuccess = (posts) => {
    return {
        type: actionTypes.GET_UNCHECKED_POSTS_SUCCESS,
        posts: posts
    }
}

export const getUnCheckedPostsFailed = (error) => {
    return {
        type: actionTypes.GET_UNCHECKED_POSTS_FAILED,
        error: error
    }
}

export const updateUncheckedPostsStart = () => {
    return {
        type: actionTypes.UPDATE_UNCHECKED_POSTS_START
    }
}

export const updateUncheckedPostsSuccess = () => {
    return {
        type: actionTypes.UPDATE_UNCHECKED_POSTS_SUCCESS
    }
}

export const updateUncheckedPostsFailed = (error) => {
    return {
        type: actionTypes.GET_UNCHECKED_POSTS_FAILED,
        error: error
    }
}

export const resetTheState = () => {
return{
    type: actionTypes.RESET_THE_STATE
}
}

export const getPosts = () => {
    return dispatch => {
        const time = localStorage['lastLogIn'];
        console.log('lastLogIn', time);
        dispatch(getPostsStart())
        axios.get(`https://social-media-project-535bc.firebaseio.com/posts.json?orderBy="time"&startAt=${time}`)
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
                dispatch(getUnCheckedPosts());
            })
            .catch(error => {
                dispatch(getPostsFailed(error));
            });
    };
};

export const post = (post) => {
    return dispatch => {
        dispatch(postStart());
        axios.post('/posts.json', post)
            .then(response => {
                dispatch(postSuccess(response.data));
            })
            .catch(error => {
                dispatch(PostFailed());
            });
    };
};

export const getUnCheckedPosts = () => {
    return dispatch => {
        dispatch(getUnCheckedPostsStart());
        const userId = localStorage.getItem('userId');
        axios.get(`/users/${userId}/unCheckedPosts.json`)
            .then(response => {
                dispatch(getUnCheckedPostsSuccess(response.data));
                console.log(response.data);
            })
            .catch(error => {
                dispatch(getUnCheckedPostsFailed(error));
            });
    }
}

export const updateUncheckedPosts = (posts) => {
    return dispatch => {
        dispatch(updateUncheckedPostsStart());
        const userId = localStorage.getItem('userId');
        axios.patch(`/users/${userId}.json`, posts)
            .then(response => {
                dispatch(updateUncheckedPostsSuccess());
                dispatch(resetTheState());
            })
            .catch(error => {
                dispatch(updateUncheckedPostsFailed(error));
            });
    }
}
