import React, { useState } from "react";

// redux의 connect 함수 참조
// 전역 데이터를 사용하려는 특정 컴포넌트와 전역데이터 관리 기능을 연결해주는 함수
// 전역 데이터 값을 해당 컴포넌트의 props 하위 속성으로 제공하여 손쉽게 컴포넌트 내에서 전역데이터를 접근할 수 있게 하거나
// 전역 데이터 값을 변경하기 위한 dispatch를 통해 액션함수를 호출하는데 dispatch 훅을 사용하기 않고도
// 액션함수 자체를 해당 컴포넌트에 props 하위 함수로 등록해주어 보다 빠르고 직관적으로 사용 가능
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { loginUser, apiError } from "../redux/actions";

import axios from "axios";

const Login2 = (props) => {
  // 전역데이터에 로그인한 사용자 토큰값 조회하기
  // useSelector 훅을 이용하지 않고 connect 함수를 통해 해당 컴포넌트에 props에 바인딩 전역데이터를 이용해보자
  console.log("전역데이터 로그인 사용자 토큰값:", props.token);

  const navigate = useNavigate();

  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // 로그인 처리 이벤트 함수
  const onLogin = (e) => {
    // saga 미들웨어 기반 로그인처리 기능 적용
    props.loginUser(login.email, login.password, navigate);

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

// 전역데이터 속성과 값을 해당 컴포넌트에 props 하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

// redux connect() 함수 호출하고 (컴포넌트명) 지정해주면 전역데이터 공간과 해당 컴포넌트를 연결할 수 있다.
// connect('전역데이터를 해당 컴포넌트에 props 속성으로 바인딩해주는 함수 정의', 각종 액션함수를 지정해주면 해당 액션함수가 props에 하위함수로 제공됨)
export default connect(mapStateToProps, { loginUser, apiError })(Login2);
