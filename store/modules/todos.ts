import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todosSliceType = 'slice/todos';

export type TodosState = {
  id: number;
  text: string;
  done: boolean;
};

const initialState: TodosState[] = [
  {
    id: 1,
    text: '리덕스 공부',
    done: true,
  },
  {
    id: 2,
    text: '리덕스 툴킷 공부',
    done: false,
  },
];

let id = 3;

// rtk는 immer를 지원하기 때문에 불변성에 신경쓰지 않아도 된다.
// 즉, 상태를 직접 변경시키는 방법을 이용하면 된다.
const todoSlice = createSlice({
  initialState,
  name: todosSliceType,
  reducers: {
    // 리듀서, 액션 분리 가능
    addTodo: {
      reducer: (state, { payload }: PayloadAction<TodosState>) => {
        state.push(payload);
      },
      prepare: (payload: { text: string }) => ({
        payload: {
          id: id++,
          text: payload.text,
          done: false,
        },
      }),
    },
    // 액션 생성자 없음. payload 속성에 바로 할당
    removeTodo: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.splice(
        state.findIndex((todo) => todo.id === payload.id),
        1,
      );
    },
    toggleTodo: (state, { payload }: PayloadAction<{ id: number }>) => {
      const idx = state.findIndex((todo) => todo.id === payload.id);
      if (typeof idx === 'number') {
        state[idx].done = !state[idx].done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice;
