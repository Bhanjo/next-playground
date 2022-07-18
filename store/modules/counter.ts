import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 슬라이스 식별 문자열
// 생성될 리듀서 액션 타입의 prefix가 된다. (slice/counter/increase)
const counterSliceType = 'slice/counter';

export type CounterState = {
  value: number;
};

// 초기 상태
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  initialState,
  name: counterSliceType,
  // rtk는 리듀서 내부에서 immer를 지원, 불변 상태 관리 가능
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    // PayloadAction으로 payload에 어떤 데이터를 넣어야 하는지 지정 가능
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// someSlice.actions로 액션 생성
export const { increase, decrease, increaseByAmount } = counterSlice.actions;

export default counterSlice;
