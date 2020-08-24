import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        isAuth: localStorage['token'] != null
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const LogInSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    };
};

export const LogInStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};
export const LogInFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('displayName');
    localStorage.removeItem('lastLogIn');
    return {
        type: actionTypes.AUTH_LOGOUT,
        isAuth: false
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};


export const auth = (email, password, displayName, history) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            displayName: displayName,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuhXnx0Dz_nD1C_aZJ0x58sOGAgfIZtCc';
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
                history.push('/LogIn');
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };

};

export const logIn = (email, password, history) => {
    return dispatch => {
        dispatch(LogInStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuhXnx0Dz_nD1C_aZJ0x58sOGAgfIZtCc';
        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('displayName', response.data.displayName);
                dispatch(LogInSuccess());
                dispatch(checkAuthTimeout(response.data.expiresIn));
                history.push('/posts');
            })
            .catch(err => {
                dispatch(LogInFailed(err.response.data.error));
            });
    };
};

