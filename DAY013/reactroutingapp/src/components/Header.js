import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#999" }}>
      <h3>헤더 영역</h3>
      <Link to="/">홈</Link> | <Link to="/article/list">게시글</Link> |{" "}
      <Link to="/article/detail?aidx=1&stock=2">게시글상세</Link> |{" "}
      <Link to="/product/category/10">상품목록</Link> |{" "}
      <Link to="/company">회사소개</Link> | <Link to="/login">로그인</Link> |{" "}
      <Link to="/entry">회원가입</Link>
    </div>
  );
};

export default Header;
