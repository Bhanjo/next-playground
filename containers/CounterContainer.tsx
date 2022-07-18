// 컴포넌트에서 리덕스 스토어에 접근해 원하는 상태를 받아오고
// 액션도 디스패치 해주기 위해 리덕스 스토어와 연동된 컨테이너 컴포넌트 생성

// import { connect } from 'react-redux';
import Counter from '../pages/redux-test/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useCallback } from 'react';
import React from 'react';

const CounterContainer = () => {
  // useSelector, useDispatch를 이용해 컨테이너 컴포넌트 만들기
  const number = useSelector((state: any) => state.counter.number);
  // 리렌더링 될 때마다 onInc, onDec 함수가 새롭게 만들어지고 있음,
  // dispatch 사용 시 useCallback으로 최적화 습관 필요
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// connect 사용 시 부모 컴포넌트가 리렌더링될 때
// 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면
// 리렌더링이 자동으로 방지되어 성능 최적화가 된다.
// 하지만, useSelector의 경우 이 작업이 이루어 지지 않으므로
// 성능 최적화를 위해서는 React.memo를 사용해 성능 최적화를 사용해야 한다.
export default React.memo(CounterContainer);

// *****************
// 스토어 안의 상태를 컴포넌트 props로 넘겨주기 위해 사용
// const mapStateToProps = (state: any) => ({
//   number: state.counter.number,
// });

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
// const mapDispatchToProps = (dispatch: any) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// *****************

// *****************
// 위 내용의 축약형
// export default connect(
//   (state: any) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);
// *****************
