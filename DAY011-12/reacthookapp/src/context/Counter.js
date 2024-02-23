// 어플리케이션 컨텍스트 프로바이더에서 제공하는 전역데이터 참조를 위한 useContext 훅 참조
import React, { useContext } from "react";

// 전역상태정보관리 컨텍스트 객체 참조
import { AppContext } from "../App";

const Counter = () => {
  // 전역 카운터 데이터 값 추출
  // useContext는 배열을 반환하고 배열 첫번째 값에 value 반환
  const [count] = useContext(AppContext);

  return (
    <div>
      <h1>총 할일 건수: {count} 건</h1>
    </div>
  );
};

export default Counter;
