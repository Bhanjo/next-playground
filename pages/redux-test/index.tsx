import Counter from './Counter';
import Todos from './Todos';

const ReduxTest = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default ReduxTest;
