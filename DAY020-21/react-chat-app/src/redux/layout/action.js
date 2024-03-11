// 액션 타입 참조
import { SET_ACTIVE_TAP } from "../../constants/actionTypes";

// 액션 함수 정의
export const setActiveTab = (tabId) => ({
  type: SET_ACTIVE_TAP,
  payload: tabId,
});
// 하는 이유?
// 컴포넌트에서 전달되는 데이터를 받아서, 액션 객체 정의
// payload: 리듀서로 전달되는 데이터 구조
