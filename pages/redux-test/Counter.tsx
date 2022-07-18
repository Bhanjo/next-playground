import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/modules';
import {
  increase,
  decrease,
  increaseByAmount,
} from '../../store/modules/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  const onIncreaseAmount = useCallback(() => {
    dispatch(increaseByAmount(Math.floor(Math.random() * 100)));
  }, [dispatch]);

  return (
    <div>
      <CounterText>{counter}</CounterText>
      <br />
      <div>
        <Btn type='button' onClick={onIncrease}>
          +1
        </Btn>
        <Btn type='button' onClick={onDecrease}>
          -1
        </Btn>
        <Btn type='button' onClick={onIncreaseAmount}>
          Random
        </Btn>
      </div>
    </div>
  );
};

const CounterText = styled.h1`
  color: ${({ theme }) => theme.color.primary.white};
  font-size: 40px;
  font-weight: bold;
`;

const Btn = styled.button`
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.third.black};
  }
`;

export default Counter;
