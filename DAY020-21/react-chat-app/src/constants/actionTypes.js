// 액션타입(이름) 상수값으로 정의

//*** 인증관련 액션 타입정의

// SAGA 기반 로그인 백엔드 통신 로직 구현
export const USER_LOGIN = "USER_LOGIN";

// 로그인한 사용자 정보를 전역데이터로 관리하기 위한 시나리오
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

// 로그아웃 완료 후 로그인 전역상태 정보 업데이트
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

// API 호출 에러 액션타입
export const API_FAILED = "API_FAILED";

//*** 레이아웃 전역데이터 관리 액션 타입정의

// 최좌측 메뉴 클릭시 클릭한 메뉴아이디 값을 전역데이터로 저장하고 중간 탭컴포넌트에 관련 메뉴 컴포넌트 표시 시나리오
export const SET_ACTIVE_TAP = "SET_ACTIVE_TAP";

// 채팅화면 상단 채팅대상자 아이콘 클릭시 해당 채팅 대상자 프로필을 화면 맨 우측에 사이드바로 표현
export const OPEN_USER_PROFILE_SIDEBAR = "OPEN_USER_PROFILE_SIDEBAR";

// 최좌측 메뉴바 하단에 Dark/Light 모드 선택에 따른 전체 컴포넌트 테마 색상 적용 시나리오
export const SET_LAYOUT_MODE = "SET_LAYOUT_MODE";

//*** 채팅관련 전역데이터 관리 액션 타입정의

// 서버소켓 메시지 전송시 전역에 전송한 메시지 데이터를 저장하는 시나리오
export const CHAT_SEND_MSG = "CHAT_SEND_MSG";

// 서버소켓에서 수신 메시지를 전역에 저장하는 시나리오
export const CHAT_RECEIVE_MSG = "CHAT_RECEIVE_MSG";

// 내 채널목록에서 채널선택시 해당 채팅방 채널 접속 및 최신 메시지 출력 시나리오
export const CHAT_CURRENT_CHANNEL = "CHAT_CURRENT_CHANNEL";
