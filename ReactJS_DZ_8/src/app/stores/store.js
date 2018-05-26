import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

//Reducers
import { usersReducer } from '../reducers/usersReducer';
import { postsReducer } from '../reducers/postsReducer.js';
import { commentsReducer } from '../reducers/commentsReducer.js';

const reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducers, middleware);
export default store;