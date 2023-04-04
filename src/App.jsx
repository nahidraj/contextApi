import { useContext, useReducer } from "react";
import "./App.css";
import { CounterContext } from "./context/CouterContext";

function App() {
  const context = useContext(CounterContext);
  const { count,incrementCount, decrementCount, resetCount } = context;

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
