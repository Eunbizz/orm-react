import React, { useState } from "react";

// useHistory로 개발자가 원하는 라우팅 주소 URL을 호출해서 해당 컴포넌트를 렌더링시킴
import { useNavigate } from "react-router-dom";

const ArticleRegist = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });

  const navigate = useNavigate();

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    //1. RestFul API를 호출해서 단일 게시글 정보를 백엔드를 통해 등록처리

    //2. 데이터 처리 완료 후 특정 URL로 켄텐츠 페이지로 이동

    // 프로그래밍 방식으로 리엑트 페이지를 이동시킬 떄 사용
    navigate("/");
  };

  return (
    <div>
      <h2>게시글 등록 페이지</h2>
      제목:
      <input
        name="title"
        value={article.title}
        onChange={onArticleChange}
      />{" "}
      <br />
      내용:
      <textarea name="contents" onChange={onArticleChange}>
        {article.contents}
      </textarea>
      <button onClick={onSave}>저장</button>
    </div>
  );
};

export default ArticleRegist;
