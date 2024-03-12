// 액션 타입 참조
import {
  SET_ACTIVE_TAP,
  OPEN_USER_PROFILE_SIDEBAR,
  SET_LAYOUT_MODE,
} from "../../constants/actionTypes";

// 액션 함수 정의
export const setActiveTab = (tabId) => ({
  type: SET_ACTIVE_TAP,
  payload: tabId,
});
// 하는 이유?
// 컴포넌트에서 전달되는 데이터를 받아서, 액션 객체 정의
// payload: 리듀서로 전달되는 데이터 구조

// 우측 사용자 프로필 영역 디스플레이 상태를 boolean 형으로 관리하고
// 전역데이터값이 true이면 false, false이면 true로 바꿔주는 액션함수 정의
export const openUsersidebar = () => ({
  type: OPEN_USER_PROFILE_SIDEBAR,
});

export const changeLayoutMode = (layoutMode) => ({
  type: SET_LAYOUT_MODE,
  payload: layoutMode,
});
