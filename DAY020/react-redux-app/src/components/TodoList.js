import React, { useState } from "react";

// redux 전역데이터 공간에 데이터를 반영하려면 useDispatch 훅을 참조
import { useDispatch } from "react-redux";

// redux 전역 공간에 데이터를 반영하려면 반드시 액션함수 참조
// 리덕스 폴더 안에 액션통합모듈을 참조하고 관련 액션함수를 참조
import { addTodoCount } from "../redux/actions";

const TodoList = () => {
  // 전역 데이터 반영을 위한 useDispatch 훅 생성
  const globalDispatch = useDispatch();

  const [todos, setTodos] = useState({ title: "", orderby: 0 });
  const [todoList, setTodoList] = useState([]);

  const handleTodo = (e) => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, todos]);
    setTodos({ title: "", orderby: 0 });
    // 전역 데이터 공간에 총 할일 건수 전역데이터 반영 - globalDispatch()
    globalDispatch(addTodoCount(todoList.length + 1));
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((todo, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div>
      {/* <h1>할 일 {todoList.length}건</h1>
        <input type="text" value={todos.title} onChange={(e) => setTodos({ ...todos, title: e.target.value })} />
        <button onClick={() => setTodoList([...todoList, todos])}>추가</button>
        <ul>
            {todoList.map((todo, index) => <li key={index}>{todo.title}</li>)}
        </ul>
        <select value={todos.orderby} onChange={(e) => setTodos({ ...todos, orderby: e.target.value })}>
            <option value="0">낮음</option>
            <option value="1">중간</option>
            <option value="2">높음</option>
        </select> */}
      할일: <input name="title" value={todos.title} onChange={handleTodo} />
      <br />
      우선순위: {""}
      <input name="orderby" value={todos.orderby} onChange={handleTodo} />
      <br />
      <button onClick={handleAddTodo}>추가</button>
      <hr></hr>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo.orderby}: {todo.title}
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
