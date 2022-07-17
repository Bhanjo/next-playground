import CounterContainer from '../../containers/CounterContainer';
import TodosContainer from '../../containers/TodosContainer';

const ReduxTest = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <CounterContainer number={0} />
      <hr />
      {/* @ts-expect-error */}
      <TodosContainer />
    </div>
  );
};

export default ReduxTest;
