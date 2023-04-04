import { createContext } from "react";
import { useReducer } from "react";
import { countReducer } from "./countReducer";
import { DECREMENT, INCREMENT, RESET } from "./actions";

export const CounterContext = createContext();

export const CountProvider = ({ children }) => {
  
  const [count, dispatch] = useReducer(countReducer, 0);

  const incrementCount = () => {
    dispatch({ type: INCREMENT, payload: 2 });
  };

  const decrementCount = () => {
    dispatch({ type: DECREMENT, payload: 2 });
  };

  const resetCount = () => {
    dispatch({ type: RESET, payload: 2 });
  };

  const value = {
    count,
    incrementCount,
    decrementCount,
    resetCount
  }

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
