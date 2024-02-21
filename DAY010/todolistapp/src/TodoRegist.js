import React, { useState } from "react";

const TodoRegist = ({ onInsert }) => {
  // 단일할일정보 데이터 구조정의 및 초기값 할당
  const [todo, setTodo] = useState({ text: "", desc: "" });

  // 할일 정보 입력시 관련 UI 요소에 바인딩된 상태 속성값 변경처리 이벤트 처리함수
  const onTodoChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // 폼내 submit 이벤트가 발생하면 실행되는 이벤트 헨들러 함수
  const onSubmit = (e) => {
    // App.js 컴포넌트에서 props로 전달받은 함수를 호출해 todoList에 데이터 반영
    onInsert(todo.text, todo.desc);
    setTodo({
      text: "",
      desc: "",
    });
    // 자바스크립트에서 UI 요소 이벤트 파생을 취소시키는 함수
    // 현재 발생한 e(submit) 이벤트를 더이상 진행되지 않게 차단하는 기능
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        제목:
        <input name="text" value={todo.text} onChange={onTodoChange} />
        내용:
        <input name="desc" value={todo.desc} onChange={onTodoChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoRegist;
