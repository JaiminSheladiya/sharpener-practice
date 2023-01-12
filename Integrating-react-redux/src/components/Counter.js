import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showCounter= useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
   dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
       dispatch(counterActions.decrement());
  };
  const increase5Handler = () => {
       dispatch(counterActions.increase(5));
    
  }

  return (
    <main className={classes.counter}>
      {showCounter && (
        <>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div style={{ padding: "20px" , display : 'flex' , gap : '20px' }}>
            <button onClick={incrementHandler}>
              Increment
            </button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increase5Handler}>Increment 5</button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
