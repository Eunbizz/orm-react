import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ArticleRegist = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });
  const navigate = useNavigate();

  return (
    <div>
      <h1>regist</h1>
    </div>
  );
};

export default ArticleRegist;
