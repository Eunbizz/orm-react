import React from "react";

const ArticleManager = ({
  onRegister,
  onUpdate,
  onRemove,
  board,
  setBoard,
}) => {
  const onBoardChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    onRegister(board.title, board.content, board.writer);
    setBoard({ title: "", content: "", writer: "" });
    e.preventDefault();
  };

  const handleUpdate = () => {
    onUpdate(board.id, board.title, board.content, board.writer);
    setBoard({ title: "", content: "", writer: "" });
  };

  const handleRemove = () => {
    onRemove(board.id);
    setBoard({ title: "", content: "", writer: "" });
  };

  const handleReset = () => {
    setBoard({ title: "", content: "", writer: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        제목
        <input
          name="title"
          value={board.title}
          onChange={onBoardChange}
          placeholder="제목을 입력하세요"
        />{" "}
        <br />
        내용
        <textarea
          name="content"
          value={board.content}
          onChange={onBoardChange}
          placeholder="내용을 입력하세요"
        />{" "}
        <br />
        등록자
        <input
          name="writer"
          value={board.writer}
          onChange={onBoardChange}
        />{" "}
        <br />
        <button type="submit">등록</button>
        <button type="button" onClick={handleUpdate}>
          수정
        </button>
        <button type="button" onClick={handleRemove}>
          삭제
        </button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
      </form>
    </div>
  );
};

export default ArticleManager;
