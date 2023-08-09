import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// 리덕스 툴킷을 사용할 때, 여러개의 reducer를 보낼 떄에는 configureStore 사용!
const store = configureStore({
  // reduecer!!! 단수임!!!
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
