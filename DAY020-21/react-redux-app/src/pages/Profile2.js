import React from "react";

// 전역 데이터를 불러오기 위해 connect 참조
import { connect } from "react-redux";

const Profile2 = (props) => {
  return (
    <div>
      <h1>로그인한 사용자의 프로필 정보-리덕스(스토어) 전역정보</h1>
      메일주소: {props.loginUser.email}
      <br />
      이름: {props.loginUser.name}
      <br />
      프로필 사진: <img src={props.loginUser.profile_img_path} />
      <br />
    </div>
  );
};

// 전역데이터 속성과 값을 해당 컴포넌트에 props 하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

export default connect(mapStateToProps)(Profile2);
