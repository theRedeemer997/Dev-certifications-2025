import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";

// for now we do not have any reducers or slices so we are passing empty object
// and for every new slice make a new entry in this object
export const store = configureStore({
  reducer: { counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
