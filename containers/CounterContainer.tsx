// 컴포넌트에서 리덕스 스토어에 접근해 원하는 상태를 받아오고
// 액션도 디스패치 해주기 위해 리덕스 스토어와 연동된 컨테이너 컴포넌트 생성

import Counter from '../pages/redux-test/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }: any) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

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

// 다른 방법
export default connect(
  (state: any) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
