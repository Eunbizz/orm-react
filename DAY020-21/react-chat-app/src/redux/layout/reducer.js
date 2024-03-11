// 액션 타입 참조
import { SET_ACTIVE_TAP } from "../../constants/actionTypes";

// store에 생성할 기본 전역데이터 구조 정의하고 초기값 설정
const INIT_STATE = {
  activeTab: "chat", // 좌측 메뉴탭 상태정보
  userSidebar: false, // 채팅대상자 프로필정보 표시여부
  conversationName: "Doris Brown", // 기본 채팅대상자 이름
  layoutMode: "light", // 밤낮 테마
};

// 리듀서 함수를 정의해서 액션타입별로 전역데이터 공간에 데이터 반영
// action 타입 객체가 입력(화면컴포넌트에서 전달된 데이터 포함됨)
const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAP:
      // 전역 데이터의 복사본을 만들어서 UI 입력 요소로 대체
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
export default Layout;
