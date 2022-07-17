import CounterContainer from '../../containers/CounterContainer';
import Todos from './Todos';

const ReduxTest = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <CounterContainer number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default ReduxTest;
