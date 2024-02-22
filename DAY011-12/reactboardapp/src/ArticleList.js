import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ boardList, onSelect }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>글쓴이</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, i) => (
            <ArticleItem
              key={board.id}
              board={board}
              onSelect={onSelect}
            ></ArticleItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
