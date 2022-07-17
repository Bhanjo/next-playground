// 루트 리듀서
// createStore 함수로 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.
// 따라서 모든 리듀서를 하나로 합치는 작업 필요 (combineReducers 함수 사용)

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
