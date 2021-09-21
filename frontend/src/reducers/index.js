// import from redux library
import { combineReducers } from 'redux';

// import posts and auth
import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ posts, auth });