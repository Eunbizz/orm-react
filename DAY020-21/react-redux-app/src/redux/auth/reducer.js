// 액션 타입 참조
import { USER_LOGIN } from "../../constants/actionTypes";

// 리듀서 전역 데이터 관리 초기값 구조 정의 및 값 할당
const INIT_STATE = {
  token: "",
  loginUser: {},
};

// 리듀서 함수 정의
const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
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
