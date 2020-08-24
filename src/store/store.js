import authReducer from '../store/reducers/auth'
import postsReducer from '../store/reducers/posts'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';





    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootReducer = combineReducers({
        postsReducer: postsReducer,
        authReducer: authReducer
    });

      const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
    ));

   
export default store ;
