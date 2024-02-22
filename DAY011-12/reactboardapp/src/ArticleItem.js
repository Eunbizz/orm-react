import React from "react";

const ArticleItem = ({ board, onSelect }) => {
  return (
    <div>
      <tr key={board.id}>
        <td>{board.id}</td>
        <td>{board.title}</td>
        <td>{board.content}</td>
        <td>{board.writer}</td>
        <td>
          <button onClick={() => onSelect(board)}>선택</button>
        </td>
      </tr>
    </div>
  );
};

export default ArticleItem;
