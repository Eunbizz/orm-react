import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { idx } = useParams();

  return (
    <div>
      <h1>ArticleDetail</h1>
      <p>{idx}</p>
    </div>
  );
};

export default ArticleDetail;
