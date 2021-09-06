import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// それぞれ slice.reducer を default export している前提
import postsReducer from './worksPosts';

const reducer = combineReducers({
  jsonPosts: postsReducer,
});

const store = configureStore({ reducer });

export default store;
