import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "INCREMENTBY2" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENTBY2" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div style={{ padding: "20px" }}>
        <button onClick={incrementHandler} style={{ margin: "20px" }}>
          Increment 2
        </button>
        <button onClick={decrementHandler}>Decrement 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
