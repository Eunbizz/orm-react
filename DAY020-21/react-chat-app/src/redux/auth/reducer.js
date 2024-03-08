// 액션 타입 참조
import { USER_LOGIN } from "../../constants/actionTypes";

// store에 생성할 기본 전역데이터 구조 정의하고 초기값 설정
const INIT_STATE = {
  token: "",
  loginUser: {},
};

// 리듀서 함수를 정의해서 액션타입별로 전역데이터 공간에 데이터 반영
// action 타입 객체가 입력(화면컴포넌트에서 전달된 데이터 포함됨)
const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      // 전역 데이터의 복사본을 만들어서 UI 입력 요소로 대체
      return {
        ...state,
        token: action.payload.token,
        loginUser: action.payload.loginUser,
      };
    default:
      return { ...state };
  }
};
export default Auth;
