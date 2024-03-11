// redux-saga 주요 헬퍼함수 참조하기
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

// axios apiClient 참조
import { APIClient } from "../../helpers/apiClient";

// 액션타입 참조
import { LOGIN_USER, API_FAILED } from "../../constants/actionTypes";

// 액션함수 참조
// 회원로그인 처리 액션함수 참조
import { userLogin, apiError } from "../actions";

// 백엔드 Restful 통신을 위한 APIClient post 메소드(create()) 함수 생성
const create = new APIClient().create;

// 로그인 백엔드 통신 처리를 위한 제너레이터 함수 정의
// 로그인처리 SAGA 제너레이터 함수
function* login({ payload: { email, password, navigate } }) {
  try {
    // call(백엔드 호출함수 지정)
    const response = yield call(create, "api/member/login", {
      email,
      password,
    });

    // 웹브라우저 로컬 스토리지 저장: 옵션
    localStorage.setItem("authUser", response.data.loginUser);
    localStorage.setItem("authToken", response.data.token);

    // 전역 스토어에 로그인 사용자 정보값 반영하기
    // put(실행하고자 하는 액션함수 지정) // 스토어의 전역 상태값 변경처리함
    yield put(userLogin(response.data.token, response.data.loginUser));

    // 특정 페이지로 이동처리
    navigate("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

// 제너레이터 함수를 노출한다
// watchLoginUser 함수를 정의하고 기능을 노출하면 추후 관련 액션함수가 실행되면 자동으로 saga제너레이터 함수가 실행됨
export function* watchLoginUser() {
  // takeEvery(액션타입, 액션사가함수) 함수의 목적은 전달되는 액션타입별, 액션함수를 실행시켜주는 기능 제공
  yield takeEvery(LOGIN_USER, login);
}

// 사용자 인증 Saga 함수를 정의하고 최종 saga 함수를 노출시킨다
function* authSaga() {
  // all([해당 saga 함수를 fork 메서드로 감싸서 배열형태로 여러개 제공])
  // fork 헬퍼함수는 비동기 기반 함수를 실행할 때 사용
  yield all([fork(watchLoginUser)]);
}

export default authSaga;
