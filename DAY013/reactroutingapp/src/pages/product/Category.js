import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  // 사용자 요청 URL에 와일드카드 idx 값이 있는 경우 해당 값 추출
  const { idx } = useParams();

  return (
    <div>
      <h1>상품 분류별 목록 페이지</h1>
      <h3>추출된 파라미터 값 idx = {idx}</h3>
    </div>
  );
};

export default Category;
