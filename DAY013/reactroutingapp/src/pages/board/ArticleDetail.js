import React from "react";

import { useSearchParams } from "react-router-dom";

const ArticleDetail = () => {
  // 여러개의 키와 값이 존재할 수 있으므로 searchParams에 여러개의 값이 전달됨
  const [searchParams, setSearchParams] = useSearchParams();

  const aidx = searchParams.get("aidx");
  const stock = searchParams.get("stock");

  return (
    <div>
      <h2>게시글 페이지</h2>
      <h3>추출된 파라미터 값 aidx = {aidx}</h3>
      <h3>추출된 파라미터 값 stock = {stock}</h3>
    </div>
  );
};

export default ArticleDetail;
