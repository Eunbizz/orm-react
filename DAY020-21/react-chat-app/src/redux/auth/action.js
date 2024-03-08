// 액션 타입 참조
import { USER_LOGIN } from "../../constants/actionTypes";

// 액션 함수 정의
export const userLogin = (token, loginUser) => ({
  type: USER_LOGIN,
  payload: { token, loginUser },
});
// 하는 이유?
// 컴포넌트에서 전달되는 데이터를 받아서, 액션 객체 정의
// payload: 리듀서로 전달되는 데이터 구조
