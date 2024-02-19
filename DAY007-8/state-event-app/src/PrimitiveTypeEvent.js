import React, { useState } from "react";

const PrimitiveTypeEvent = () => {
  // 회원가입 데이터 원시타입으로 개별적으로 정의
  // 1. 데이터의 구조를 정의하고 초기값 할당
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSave = () => {
    var user = {
      email: email,
      password: password,
      userName: userName,
    };
    console.log(user);
    alert("회원가입이 완료되었습니다.");
  };

  const handleInit = () => {
    setEmail("");
    setPassword("");
    setUserName("");
  };

  // 이름입력요소에서 엔터키 발생시 감지해서 저장
  const handleEnterSave = (e) => {
    console.log(e.key);
    console.log(e.keyCode); // 13
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div>
      <h1>회원가입-원시타입으로 데이터 바인딩</h1>
      {/* 2. 화면 UI 요소 정의 */}
      메일주소:{" "}
      <input
        type="text"
        placeholder="메일주소"
        value={email}
        onChange={handleEmail}
      />
      <br />
      <br />
      암호:{" "}
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePassword}
      />
      <br />
      <br />
      이름:{" "}
      <input
        type="text"
        placeholder="이름"
        value={userName}
        onChange={handleUserName}
        onKeyDown={handleEnterSave}
      />
      <br />
      <br />
      <hr></hr>
      <button onClick={handleSave}>저장</button>
      <button onClick={handleInit}>초기화</button>
    </div>
  );
};

export default PrimitiveTypeEvent;
