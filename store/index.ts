import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './modules';

// 스토어를 만들기 위한 createStore를 추상화한 configureStore
const store = configureStore({
  reducer: rootReducer,
});
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
