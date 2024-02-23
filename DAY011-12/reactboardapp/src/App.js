import React, { useState } from "react";

import BoardTemplate from "./BoardTemplate";
import ArticleManager from "./ArticleManager";
import ArticleList from "./ArticleList";

function App() {
  const [board, setBoard] = useState({
    id: 0,
    title: "",
    content: "",
    writer: "",
  });

  const [boardList, setBoardList] = useState([
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      writer: "글쓴이1",
    },
  ]);

  const [nextId, setNextId] = useState(2);

  const onRegister = (title, content, writer) => {
    setBoardList(boardList.concat({ id: nextId, title, content, writer }));
    setNextId(nextId + 1);
  };

  const onUpdate = (id, title, content, writer) => {
    setBoardList(
      boardList.map((board) =>
        board.id === id ? { id, title, content, writer } : board
      )
    );
  };

  const onRemove = (id) => {
    setBoardList(boardList.filter((board) => board.id !== id));
  };

  const onSelect = (selectedBoard) => {
    setBoard(selectedBoard);
  };

  return (
    <div className="App">
      <BoardTemplate>
        <ArticleManager
          board={board}
          setBoard={setBoard}
          onRegister={onRegister}
          onUpdate={onUpdate}
          onRemove={onRemove}
        ></ArticleManager>
        <ArticleList boardList={boardList} onSelect={onSelect}></ArticleList>
      </BoardTemplate>
    </div>
  );
}

export default App;
