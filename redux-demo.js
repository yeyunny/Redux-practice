const redux = require("redux");

// reducer 함수 만들기
// 기존 상태 + 발생 액션 : 총 2개의 파라미터 받음 => 새로운 상태 객체 리턴
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// redux 저장소 만들기
// 어떤 리듀서(counterReducer)가 저장소(store)를 변경하는지 알 수 있다
const store = redux.createStore(counterReducer);

// 구독함수
const counterSubscriber = () => {
  // 저장소(store)에 있는 상태(state) 호출 가능
  // 상태가 변화할 때마다 최신 상태를 제공
  const latestState = store.getState();

  console.log(latestState);
};

// 참고하고 있는 구독함수는 무엇인지 알려줌
store.subscribe(counterSubscriber);

// 액션 발송
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
