// 전역 상태 관리를 위한 객체 참조하기
import React, { createContext, useState } from "react";

import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";

import PerformanceHook from "./PerformanceHook";

import TodoList from "./context/TodoList";
import Counter from "./context/Counter";

// 전역 리액트 어플리케이션 컨텍스트 만들고 외부로 노출하기
export const AppContext = createContext();

// 카운터 전용 데이터 제공 프로바이더 생성함수 정의
// 전역 데이터를 제공해주는 최상위 컴포넌트 정의하기
function CounterProvider({ children }) {
  // 전역으로 사용될 할일건수 상태값 정의
  // useState을 이용한 데이터 관리 시 별도 Setter 함수 없이 사용하는 경우 변수만 할당
  const count = useState(0);

  return <AppContext.Provider value={count}>{children}</AppContext.Provider>;
}

function App() {
  return (
    <div className="App">
      {/* 상태관리 및 컴포넌트 생애주기 관리 훅 */}
      {/* <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReducerHook></UseReducerHook>
      <hr></hr>
      <UseEffectHook></UseEffectHook> */}

      {/* 성능최적화 훅  */}
      {/* <PerformanceHook></PerformanceHook> */}

      {/* 전역 상태 관리 훅 */}

      {/* 전역 데이터 제공 프로바이더 컴포넌트로 최상위 컴포넌트의 자식요소를 감싸준다 */}
      <CounterProvider>
        <Counter></Counter>
        <hr></hr>
        <TodoList></TodoList>
      </CounterProvider>
    </div>
  );
}

export default App;
