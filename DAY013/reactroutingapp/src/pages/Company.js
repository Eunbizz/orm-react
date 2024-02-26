import React from "react";

// 중첩라우팅의 자식요소 컴포넌트를 부모 컴포넌트에서 어디에 위치시킬지 지정하는 요소를 참조
import { Outlet } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <h2>회사 소개 페이지</h2>
      <p>넥플은 넥플이다</p>

      {/* 중첩 라우팅 요소에서 지정한 자식 컴포넌트를 아래 위치에 렌더링 */}
      {/* 자식요소를 추출하려면 중첩라우팅 주소를 호출해야함 */}
      <Outlet />
    </div>
  );
};

export default Company;
