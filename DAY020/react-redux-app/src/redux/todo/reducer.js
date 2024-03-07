// 1. 해당 리듀서와 관련된 액션 타입을 참조
import { TODO_COUNT } from "../../constants/actionTypes";

// 2. 전역데이터 저장소(store)에 생성할 기본 전역데이터 구조를 정의하고 초기값을 설정
const INIT_STATE = {
  todoCount: 200,
};

// 3. 리듀서 함수를 정의해서 액션 타입별로 전역데이터 공간에 데이터를 반영
// 리듀서 함수는 해당 업무와 관련된 다양한 액션타입별로 전역상태를 관리해주는 기능을 제공
// 리듀서 함수에 입력 파라미터로 action 타입 객체가 전달되고, action 타입 객체 안에는
// 화면 컴포넌트에서 전달된 데이터가 포함되어 있음
// 해당 업무 전용 리듀서 함수는 다양한 액션타입별로 데이터를 case by case로 관리
// state는 store에 저장된 전체 globalstate 내 todo 전용 전역데이터를 말함
const Todo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TODO_COUNT:
      return { ...state, todoCount: action.payload.todoCount };
    default:
      return { ...state };
  }
};

export default Todo;
