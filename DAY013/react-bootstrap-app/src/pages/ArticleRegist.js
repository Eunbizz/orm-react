import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ArticleRegist = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });
  const navigate = useNavigate();

  return (
    <div className="container-xl">
      <h2>게시글 작성</h2>
      <form>
        <div className="mb-3">
          <label for="postTitle" className="form-label">
            제목
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="mb-5">
          <label for="postContent" className="form-label">
            내용
          </label>
          <textarea
            className="form-control"
            id="postContent"
            rows="20"
            placeholder="내용을 입력하세요"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          제출
        </button>
      </form>
    </div>
  );
};

export default ArticleRegist;
