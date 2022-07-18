// 리듀서를 합치는 rootReducer

import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import counterSlice, { CounterState } from './counter';
import todoSlice, { TodosState } from './todos';

export type RootState = {
  counter: CounterState;
  todos: TodosState[];
};

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  switch (action.type) {
    // HYDRATE 서버 스토어와 클라이언트 스토어를 합침, next.js는 SSR이기 떄문에 필요
    case HYDRATE:
      return action.payload;
    default:
      const combinedReducer = combineReducers({
        counter: counterSlice.reducer,
        todos: todoSlice.reducer,
      });

      return combinedReducer(state, action);
  }
};

export default rootReducer;
