import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/modules';
import { addTodo, removeTodo, toggleTodo } from '../../store/modules/todos';

const TodoItem = ({ todo, onToggle, onRemove }: any) => {
  return (
    <ItemContainer>
      <input
        type='checkbox'
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button type='button' onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </ItemContainer>
  );
};

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [inputValue, setInputValue] = useState('');

  // 리듀서에서 payload 객체를 받으므로 파라미터 전달도 객체로 해준다.
  const onAdd = useCallback(
    (todoText) => dispatch(addTodo({ text: todoText })),
    [dispatch],
  );
  const onRemove = useCallback(
    (id) => dispatch(removeTodo({ id })),
    [dispatch],
  );
  const onToggle = useCallback(
    (id) => dispatch(toggleTodo({ id })),
    [dispatch],
  );

  // @ts-expect-error
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  };

  const onChange = (e: any) => setInputValue(e.target.value);

  return (
    <Container>
      <TodoForm onSubmit={onSubmit}>
        <input value={inputValue} onChange={onChange} />
        <button type='submit'>등록</button>
      </TodoForm>
      <TodoList>
        {todos &&
          todos.map((todo: { id: number; done: boolean; text: string }) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
      </TodoList>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.primary.white};
  width: 700px;
  height: 500px;
  margin: 0 auto;
  border-radius: 15px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TodoForm = styled.form`
  margin: 0 auto;
  display: flex;
  input {
    border: 1px solid ${({ theme }) => theme.color.primary.black};
    height: 25px;
    margin: 0 auto;
    width: 80%;
    padding: 15px;
  }
  button {
    width: 20%;
    background-color: ${({ theme }) => theme.color.third.black};
    color: ${({ theme }) => theme.color.primary.white};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.second.black};
    }
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  font-size: 25px;
  border: 1px solid ${({ theme }) => theme.color.third.black};
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    cursor: pointer;
  }
  button {
    height: 30px;
    width: 50px;
    background-color: ${({ theme }) => theme.color.third.black};
    color: ${({ theme }) => theme.color.primary.white};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.primary.black};
    }
  }
`;

export default Todos;
