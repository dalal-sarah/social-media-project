import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isAuth: localStorage.getItem('token') != null,
    lastLogIn: localStorage.getItem('lastLogIn') != null
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const LogInFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        isAuth: false
    });
};

const LogInStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const LogInSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isAuth: true
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, isAuth: false , lastLogIn : false });
};

const setLastLogInStart = (state, action) => {
    return updateObject(state, { loading: true });
}
const setLastLogInSuccess= (state, action) => {
    return updateObject(state, { lastLogIn: true , loading : false });
}

const setLastLogInFailed= (state, action) => {
    return updateObject(state, { error : action.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.LOGIN_START: return LogInStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return LogInSuccess(state, action);
        case actionTypes.LOGIN_FAILED: return LogInFailed(state, action);
        case actionTypes.SET_LAST_LOGIN_START: return setLastLogInStart(state, action);
        case actionTypes.SET_LAST_LOGIN_SUCCESS: return setLastLogInSuccess(state, action);
        case actionTypes.SET_LAST_LOGIN_FAILED: return setLastLogInFailed(state, action);
        default:
            return state;
    }
};

export default reducer;