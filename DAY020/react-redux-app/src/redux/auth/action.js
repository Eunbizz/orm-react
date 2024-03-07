import { USER_LOGIN } from "../../constants/actionTypes";

// 액션 함수 정의
export const userLogin = (token, loginUser) => ({
  type: USER_LOGIN,
  payload: { token, loginUser },
});
