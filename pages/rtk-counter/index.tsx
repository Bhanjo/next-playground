import { useState } from 'react';

const RtkCounter = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <div>
      리덕스 툴킷 예제입니다.
      <button type='button' onClick={inc}>
        증가
      </button>
    </div>
  );
};

export default RtkCounter;
