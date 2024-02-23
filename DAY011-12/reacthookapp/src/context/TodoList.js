import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";

// 전역상태정보관리 컨텍스트 객체 참조
import { AppContext } from "../App";

// 전역 데이터 값을 조회하고 반환하는 함수
function useTodoCountState() {
  const value = useContext(AppContext);
  return value;
}

const TodoList = () => {
  const refTitle = useRef(null);

  // 전역 데이터 중 카운터 상태값 관리해주는 개발자 정의 훅
  // 전역 데이터 상태값을 관리해주는 useState 개발자 정의 훅 구현
  // 용도는 전역데이터를 setter 함수로 해당 컴포넌트에서 관리하기 위함
  const [, setTodoCount] = useTodoCountState();

  const [todo, setTodo] = useState({
    title: "",
    contents: "",
    orderby: 0,
  });

  const [todoList, setTodoList] = useState([]);

  // 최초 컴포넌트가 마운팅될 때를 감지해서 제목입력박스에 포커스를 맞춘다
  useEffect(() => {
    refTitle.current.focus();
  }, []);

  // 할일 정보 데이터 바인딩
  const onTodoChange = useCallback(
    (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    },
    [todo]
  );

  // 할일 추가 이벤트 처리기
  const onAdd = useCallback(() => {
    setTodoList([...todoList, todo]);

    setTodo({
      title: "",
      contents: "",
      orderby: 0,
    });

    refTitle.current.focus();

    // 전역데이터 값 변경처리
    setTodoCount(() => todoList.length + 1);
  }, [todo, todoList]);

  return (
    <div>
      <h1>TodoList 관리자</h1>
      할일:{" "}
      <input
        ref={refTitle}
        name="title"
        value={todo.title}
        onChange={onTodoChange}
      />
      <br />
      내용:
      <input name="contents" value={todo.contents} onChange={onTodoChange} />
      <br />
      우선순위:
      <input name="orderby" value={todo.orderby} onChange={onTodoChange} />
      <br />
      <button onClick={onAdd}>추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item.title} -- {item.contents} -- {item.orderby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
