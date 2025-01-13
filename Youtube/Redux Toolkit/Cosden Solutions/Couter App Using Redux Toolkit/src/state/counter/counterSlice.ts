import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // the extraReducers are only for async actions
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
      console.log("async pending state");
    });
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        console.log("async fulfilled state");
        state.value += action.payload;
      }
    );
  },
});

//create a method that takes a number as parameter and returns the same number after 1 sec
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
