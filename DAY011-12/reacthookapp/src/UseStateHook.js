import React, { useState } from "react";

const UseStateHook = () => {
  //해당 컴포넌트내에서 사용하는 로컬 상태값 구조 정의 및 값할당
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>UseStateHook</h1>
      <h3>카운터:{count}</h3>
      <button onClick={() => onIncrease()}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
};

export default UseStateHook;
