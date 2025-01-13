import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <button onClick={() => dispatch(incrementByAmount(20))}>
          INCREMENT BY 20
        </button>
        <button onClick={() => dispatch(incrementAsync(20))}>
          INCREMENT ASYNC
        </button>
      </div>
    </>
  );
};

export default Counter;
