import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });

  const onChangeEntry = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  // 회원가입 이벤트 처리 함수
  const onEntry = (e) => {
    // axios로 회원가입 처리 RestAPI를 호출해서 회원가입 처리

    // 데이터가 다를 경우(지금은 같음) 백엔드 구조에 맞추어서 전달
    const entryData = {
      email: user.email,
      password: user.password,
      name: user.name,
    };

    axios
      .post("http://localhost:3005/api/member/entry", entryData)
      .then((res) => {
        console.log(res.data);
        if (res.data.code === "200") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("백엔드 호출 에러 발생");
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onEntry}>
        메일주소:{" "}
        <input name="email" value={user.email} onChange={onChangeEntry} />
        암호:{" "}
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeEntry}
        />
        이름: <input name="name" value={user.name} onChange={onChangeEntry} />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Register;
