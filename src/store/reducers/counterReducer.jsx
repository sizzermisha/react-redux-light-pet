import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "conuter",
  initialState: {
    input: 1,
    button: 0,
  },
  reducers: {
    increment: (state) => {
      state.button += 1;
    },
    decrement: (state) => {
      state.button -= 1;
    },
    incrementByAmount: (state) => {
      state.button += Number(state.input) || 1;
    },
    inputChangeAmount: (state, action) => {
      state.input = Number(action.payload) || 0;
    },
    incrementByReactAmount: (state, action) => {
      state.button += action.payload;
    },
  },
});

// export const incrementByAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByReactAmount(amount));
//   }, 1000);
// };

export const {
  incrementByReactAmount,
  inputChangeAmount,
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
