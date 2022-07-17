// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const changeInput = (input: any) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text: any) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id: any) => ({
  type: TOGGLE,
  id,
});
export const remove = (id: any) => ({
  type: REMOVE,
  id,
});

// 리듀서
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리덕스 툴킷 배우기',
      done: false,
    },
  ],
};

function todos(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state, // 기존 상태 복사
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo), // 기존 todos 복사 후 새로운 todo 붙여넣고 저장
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          // id 일치시 기존 내용 복사 후 done 프로퍼티만 기존 내용에 반대로
          // 불일치면 그대로 리턴
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        // todos: state.todos.map((todo) => console.log(todo, action.id)),
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
