// all 헬퍼함수를 참조해서 모든 업무별 saga 파일에서 구현한
// saga 제너레이터 함수를 배열안에 통합해 추가
import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
//import LayoutSaga from './layout/saga';

export default function* rootSaga(getState) {
  yield all([authSaga()]);
}
