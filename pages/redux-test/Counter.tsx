import styled from 'styled-components';

type Props = {
  number: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
};

const Counter = ({ number = 0, onIncrease, onDecrease }: Props) => {
  return (
    <div>
      <CounterText>{number}</CounterText>
      <br />
      <div>
        <Btn type='button' onClick={onIncrease}>
          +1
        </Btn>
        <Btn type='button' onClick={onDecrease}>
          -1
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
