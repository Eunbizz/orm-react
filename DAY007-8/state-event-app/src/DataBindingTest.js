import React, { useState } from "react";

const DataBindingTest = () => {
  // 텍스트 박스 메시지 바인딩 데이터 정의 및 초기값(빈 문자열) 할당
  const [message, setMessage] = useState("");

  // 메시지 입력 UI 요소의 입력값이 변경될 때마다 입력 이벤트를 처리해주는 이벤트 핸들러 함수
  const handleMessage = (e) => {
    // 이벤트가 발생한 입력요소를 찾고 입력요소의 현재 입력값을 추출해서 콘솔에 출력
    setMessage(e.target.value);
  };

  // 데이터 바인딩 기법을 통해 UI를 개발하는 MVVM 패턴에서 가장 중요한 점은
  // 데이터의 구조와 데이터의 값에 따라 UI가 제어되기 때문에
  // 화면/컴포넌트에서 사용하는 데이터의 구조를 먼저 정의하고 관련 UI 요소에 적절한 데이터 바인딩이 이루어져야함

  const handleReset = () => {
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        margin: "20px 20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      메시지:<p>{message}</p>
      <hr
        style={{ border: "1px dashed #999", width: "100%", margin: "0px" }}
      ></hr>
      {/* onChange 이벤트는 입력요소의 값이 바뀔때마다 발생하는 이벤트
      텍스트 박스에 입력값이 바뀔 때마다 바인딩된 데이터 소스(state)를 변경해줘야 함 - 양방향 데이터 바인딩 */}
      <input
        type="text"
        name="message"
        placeholder="입력해주세요"
        value={message}
        onChange={handleMessage}
        style={{ margin: "10px 0", padding: "5px", width: "100%" }}
      />
      <button
        onClick={handleReset}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        초기화
      </button>
    </div>
  );
};

export default DataBindingTest;
