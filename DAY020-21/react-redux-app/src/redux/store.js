// store 구성을 위한 추가 패키지 설치
// yarn add @reduxjs/toolkit -D
// redux 기반 store 환경을 쉽게 구성해주기 위한 추가 패키지 설치 필요

// // @reduxjs/toolkit 패키지의 configureStore 함수를 통해 store 구성
// import { configureStore } from "@reduxjs/toolkit";

// // 통합된 리듀서함수를 참조
// import reducers from "./reducers";

// // 전역데이터 저장소 store를 구성
// const store = configureStore({
//   reducer: reducers,
//   devTools: true,
// });

// // 전역 저장소 객체를 노출
// export default store;

//Saga환경을 지원하는 store구성 방식
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

// 업무별 saga 파일 통합본 참조하기
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // 기존 리덕스 스토어 saga 미들웨어 통합
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}
