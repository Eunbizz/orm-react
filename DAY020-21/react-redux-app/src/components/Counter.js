import React from "react";

// 리덕스 스토어에 전역데이터 todoCount 값을 Subscribe하여 전역데이터 바인딩

// react-redux 패키지에서 제공하는 useSelector 훅을 이용하면 손쉽게
// 전역데이터 공간의 특정 데이터 속성을 UI 요소에 바인딩가능
import { useSelector } from "react-redux";

const Counter = () => {
  // useSelector() 훅은 store 저장소를 접근하기 위한 훅이고
  // (state는 전역저장소 공간에 있는 전체 globalState 값을 의미)
  // 전역공간에 특정 업무에 관련된 전역데이터 접근은 관련 리듀서 함수와 리듀서 함수에서 관리하는 데이터 구조를 이용해 추출
  const todoCount = useSelector((state) => state.Todo.todoCount);
  return (
    <div>
      <h1>할일건수: {todoCount}건</h1>
    </div>
  );
};

export default Counter;
