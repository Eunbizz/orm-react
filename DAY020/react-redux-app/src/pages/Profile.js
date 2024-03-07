import React, { useEffect, useState } from "react";

// 전역 데이터 공간에서 로그인한 사용자 정보 가져오기위한 useSelector 훅 참조
import { useSelector } from "react-redux";

import axios from "axios";

const Profile = () => {
  // 전역데이터 공간에 로그인한 사용자 정보 가져오기
  const token = useSelector((state) => state.Auth.token);
  // 리덕스 스토어 전역 로그인 사용자 데이터
  const loginUser = useSelector((state) => state.Auth.loginUser);

  // DB에서 가져온 사용자 데이터
  const [user, setUser] = useState({});

  // 최초 컴포넌트 렌더링시에만 백엔드에서 로그인 사용자 정보조회/바인딩 처리
  useEffect(() => {
    axios
      .get("http://localhost:3005/api/member/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.error("백엔드 에러", err);
      });
  }, []);

  return (
    <div>
      <h1>로그인한 사용자의 프로필 정보-리덕스(스토어) 전역정보</h1>
      메일주소: {loginUser.email}
      <br />
      이름: {loginUser.name}
      <br />
      프로필 사진: <img src={loginUser.profile_img_path} />
      <br />
      <hr />
      <h1>로그인한 사용자의 프로필 정보-토큰기반 백엔드 최신정보</h1>
      메일주소: {user.email}
      <br />
      이름: {user.name}
      <br />
      프로필 사진: <img src={user.profile_img_path} />
      <br />
    </div>
  );
};

export default Profile;
