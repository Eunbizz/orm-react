import React, { useState } from "react";

import TodoTemplate from "./TodoTemplate";
import TodoRegist from "./TodoRegist";
import TodoList from "./TodoList";

function App() {
  // 할일 목록 데이터 구조 정의 및 초기값 할당하기
  const [todos, setTodos] = useState([
    { id: 1, text: "백엔드 개발", desc: "Node.js", checked: false },
    { id: 2, text: "프론트엔드 개발", desc: "React.js", checked: false },
    { id: 3, text: "데이터베이스 설계", desc: "MongoDB", checked: false },
  ]);

  // 할일 고유번호 데이터 정의 및 초기값 할당 - 원시타입
  const [nextId, setNextId] = useState(4);

  // 할일 등록 처리 이벤트 처리함수 정의
  // 처리해야할 데이터가 존재하는 컴포넌트에서 이벤트처리함수를 정의하고 자식요소로 props를 통해 전달
  // 자식요소에서는 전달된 이벤트 함수를 실행시킬 수 있고 해당 함수는 결국 부모 컴포넌트의 데이터를 변경하게 함
  const onInsert = (text, desc) => {
    // 기본 배열의 복사본을 만들고 신규 객체를 추가
    // setTodos(...todos, {id:nextId,text:text, desc:desc,checked:false})

    // 할일 목록 데이터에 신규 할일 데이터 추가
    setTodos(todos.concat({ id: nextId, text, desc, checked: false }));

    // 다음 채번번호 증가처리
    setNextId(nextId + 1);
  };

  // 특정 단일 할일 정보 삭제처리함수 정의
  const onRemove = (id) => {
    // 삭제할 할일 정보를 제외한 나머지 할일정보만 추출
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 특정 할일정보 체크박스 선택시 상태변경 처리함수 정의
  // 클릭한 특정 체크박스의 id값을 전달받아 해당 id값을 가진 할일정보의 checked값을 반전시킴
  const onSelect = (id) => {
    // 할일 목록안에 특정 단일아이템의 값을 바꾸는 것이기 때문에 setTodos()를 호출하고 호출시 특정아이템을 찾고 관련속성값을 변경
    // todo 목록데이터의 map() 메소드를 호출해서 배열복사본을 만들고 배열복사본을 반복해서 동일한 id 값이 있는 객체를 찾은 후
    // 동일한 객체가 있는 경우 해당 객체이 복사본(deepcopy)을 만들어 checked값을 반전시키고 아닌경우
    // 기존 복사본(shallowcopy)본을 반환
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>총 할일: {todos.length}건</h1>
      <TodoTemplate>
        {/* 부모에서 정의된 함수(이벤트헨들러함수)도 props로 자식요소에 전달 */}
        <TodoRegist onInsert={onInsert}></TodoRegist>

        <TodoList
          todos={todos}
          onRemove={onRemove}
          onSelect={onSelect}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
