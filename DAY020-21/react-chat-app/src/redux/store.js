// @reduxjs/toolkit 패키지의 configureStore 함수를 통해 store 구성
import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
