// ducks 패턴으로 작성
// 한 파일에 액션 타입, 액션 생성 함수, 리듀서 함수를 모두 작성

// 액션 타입 정의
const INCREASE = 'counter/INCREASE'; // '모듈이름/액션이름' 형태로 작성하는 것이 좋다
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서 함수
const initialState = {
  number: 0,
};

function counter(state = initialState, action: { type: any }) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
