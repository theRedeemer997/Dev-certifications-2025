# Redux ToolKit (RTK)

- Setup install the following dependencies

  ```shell
    npm i @reduxjs/toolkit react-redux
  ```

- Redux toolkit came to prevent the issue of` prop drilling`. So basically what happens is suppose there is the great grand parent and then there is the grand parent and then there is the parent and then the child , so what happens is that ?
- Suppose the child need any prop, the state or the prop which is there with the great grand parent has now to be passed to the child . In this case this prop has to first go to grand parent and from there to parent and then to child. However this grand parent and the parent does not need the prop so this is unecessay and this is called prop drilling and to overcome this issue the redux came in to picture and redux toolkit is a version of that

- it has different concepts

  - `Store` --> It is global state that has all the states and the component just access the store to access the state

  - `Slice`--> The store is made up of multiple slices which are reponsible to particular domains of the application. Suppose we have a Counter Application, then that application will have a counter slice

  - `Action` ---> Action is operations performed on the state - the action has two parts and one is the type and the next is the payload . So, let's take the example of the couter app again and lets say there are two actions and one is the type which represents the name which is increment and suppose we want a value from which the updation should happen and that is the case we pass the payload. The `type` part is required and the `payload` part is optional

  - `Reducers` --> basically are functions that take the actions and depending on the `type`, and here it is referring to one of the part of the action make update in the redux store

  In short redux follow immutability which means, the `reducers` cannot directly go and update the state in the store so, basically it makes a copy of the state and make changes to the copy of the state and then overwrites the entire state using the copy.

## Steps

- First go inside the `src` and create a folder called `state`
- create a file called `store.ts  `
- In store then import the `configureStore` from `@reduxjs/toolkit`
- after that add the below lines ad here the reducers are empty object as there are no slices or reducers

```JavaScript
export const store = configureStore({
  reducer: {},
});
```

- Now export the type `RootState` and `AppDispatch`

- for now, these are the changes in the store.ts file and then go to main.tsx and then

  - first install react-redux and then import the store that we create and also the `Provider` form `react-redux`
  - and then copy the blelow lines of the code

  ```TypeScript
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./index.css";
  import App from "./App.tsx";
  import { Provider } from "react-redux";
  import { store } from "./state/store.ts";

    createRoot(document.getElementById("root")!).render(
    <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
    );
  ```

  - now, the entire application can access the store

  - now create a folder called `Counter` and then create a file called `CounterSlice`
  - add the following contents

  ```TypeScript
  import { createSlice } from "@reduxjs/toolkit";
        interface CounterState {
        value: number;
        }

        const initialState: CounterState = {
        value: 0,
        };

        const counterSlice = createSlice({
        name: "counter",
        initialState,
        reducers: {},
        });

        export default counterSlice.reducer;
  ```

- Now go back to store and update the `reducer` object . So first import the createdSlice and then update the reducer object

```TypeScript
import counterReducer from "./counter/CounterSlice";
export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

- Now go back to the `counterSlice` and then update the `reducers` object and also export the actions
- ```TypeScript
    reducers: {
        increment: (state) => {
          state.value += 1;
        },
        decrement: (state) => {
          state.value -= 1;
        },
      },

      // export the actions
      export const { increment, decrement } = counterSlice.actions;
  ```

  - Go to the `Counter.tsx` and then add the following lines

  ```TypeScript
        import { useDispatch, useSelector } from "react-redux";
        import { RootState } from "../state/store";
        import { decrement, increment } from "../state/counter/CounterSlice";

        const Counter = () => {
          const count = useSelector((state: RootState) => state.counter.value);
          const dispatch = useDispatch();
          return (
            <>
              <h2>{count}</h2>
              <div>
                <button onClick={() => dispatch(increment())}>INCREMENT</button>
                <button onClick={() => dispatch(decrement())}>DECREMENT</button>
              </div>
            </>
          );
        };
        export default Counter;
  ```

  ```TypeScript
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        // add this new action in the counterSlice.ts
        incrementByAmount: (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        },
      },
    });

    //export all the new action
    export const { increment, decrement, incrementByAmount } = counterSlice.actions;

    export default counterSlice.reducer;
  ```

  - Now again go back to the Counter Slice and then here what we can do is add a third method called the incrementByAmount and as we have added in the top of code and please export the action as well

  - Now, go to the `Counter` component and then create a new button and add the following code there

  ```TypeScript
  <button onClick={() => dispatch(incrementByAmount(20))}>
          INCREMENT BY 20
   </button>
  ```

- Now, let get to the point where the asynchronous operations are taken care
  by redux toolkit and for this we used something
  called `CreateAsyncThunk`
- The parameter that the `CreateAsyncThunk` takes are name of the function and the body of the function itself.

- the steps required to use the `CreateAsyncThunk` are

  - go to `CounterSlice` and below the `createSlice` , create a async function . In our case we have used this,

  ```TypeScript
  //create a method that takes a number as parameter and returns the same number after 1 sec
  export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
  );
  ```

  - after that add an entry for `extraReducers` part where, add the following code .

  ```TypeScript
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
  ```

- after that go to `Counter.tsx` where you can, add a new button and add the dispatch for new action
