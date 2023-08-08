import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // redux store에 대한 action을 보냄
  const dispatch = useDispatch();

  //redux가 실행하는 함수 : useSelector
  // state: 실행될 때 리덕스 상태를 의미
  // state를 넣고 state.counter라는 이 컴포넌트에서 필요로 하는 상태 부분 받음
  // store의 상태 값이 변경될 때마다 자동으로 업데이트 되고 최신카운터 받음!!!
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
