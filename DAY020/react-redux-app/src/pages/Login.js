import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { userLogin } from "../redux/actions";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const globalDispatch = useDispatch();

  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // 로그인 처리 이벤트 함수
  const onLogin = (e) => {
    // axios로 백엔드 로그인 RestFul API 구현
    axios
      .post("http://localhost:3005/api/member/login", login)
      .then((res) => {
        console.log(res.data);

        // 웹브라우저 로컬스토리지에 저장하는 방법
        window.localStorage.setItem("token", res.data.data.token);

        // 리덕스 전역데이터 저장소(store)에 토큰/로그인  사용자 정보 저장
        if (res.data.code === "200") {
          globalDispatch(
            userLogin(res.data.data.token, res.data.data.loginUser)
          );
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("에러발생");
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:{" "}
        <input name="email" value={login.email} onChange={onChangeLogin} />
        암호:{" "}
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={onChangeLogin}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
